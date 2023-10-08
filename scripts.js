$(document).ready(function () {
    const MILLISECOND = 1;
    let points = 0;
    let timeleft = 2500;
    let stats = `Points:  ${points}    |     Timeleft:  ${(timeleft / 1000).toFixed(2)}`;
    let rabbit;
    let interval;
    let bestResult = 0;
    $(".best-score").text(`Best score: ${bestResult}`);
    $(".score").text(`Score: ${points}`);

    $(".btn-start").click(() => {
        $(".btn-start").hide();
        $(".stats").show();
        $(".stats").text(stats);
        $(".score").text(`Score: ${points}`);
        timer();
        init();
    });


    function init() {
        rabbit = $.parseHTML("<img src='./images/rabbit.png' width='50%' height='50%' alt='rabbit' />");
        let cells = $(".board-cell");
        const randomIndex = Math.floor(Math.random() * 9);
        $(cells[randomIndex]).html(rabbit);
        $(rabbit).click(onRabbitClick);
    }


    function onRabbitClick() {
        $(rabbit).hide();
        points++;
        timeleft += 80;
        $(".score").text(`Score: ${points}`);
        init();
    }


    function timer() {
        interval = setInterval(() => {
            if (timeleft <= 0) {
                stopTimer();
            } else {
                timeleft--;
                $(".stats").text(`⏳ Timeleft: ${(timeleft / 1000).toFixed(2)} sec.`);
            }
        }, MILLISECOND);
    }


    function stopTimer() {
        clearInterval(interval);
        $(rabbit).hide();
        $(".stats").hide();
        $(".btn-start").show();

        if (points > bestResult) {
            bestResult = points;
        }
        $(".score").text(`Score: ${points}`);
        timeleft = 2500;
        points = 0;
        $(".best-score").text(`Best score: ${bestResult}`);
    }
});