var win = 0;
var lose = 0;
var crystl = 0;
var scor = 0;
var targetNumber = Math.floor(Math.random() * 60) + 1;
var random = Math.floor(Math.random() * 12) + 1;


$(document).ready(function () {
    function reset() {
        scor = 0;
        targetNumber = Math.floor(Math.random() * 60) + 1;
        random = Math.floor(Math.random() * 12) + 1;
    }
    function next() {
        targetNumber = Math.floor(Math.random() * 60) + 1;
        random = Math.floor(Math.random() * 12) + 1;
    }
    $(".target").text("Target:" + targetNumber)
    // Notice I didn't set $(".jumbotron") to a var this time?
    // If you only plan to use that selector once it doesn't need to be a var
    $("#crystl1").on("click", function () {
        scor = scor + random;
        $(".score").text(scor);
    });

    $("#crystl2").on("click", function () {
        if (".crystal" > 0) {
            next();
            scor = scor + random;
            $(".score").text(scor);
        }
        else{
            scor = scor + random;
        $(".score").text(scor);
        }

        
    });
    $("#crystl3").on("click", function () {

        scor = scor + random;
        $(".score").text(scor);
    });
    $("#crystl4").on("click", function () {

        scor = scor + random;
        $(".score").text(scor);
    });
    if (scor === targetNumber) {
        alert("you win!")
        win ++
        $(".win").text(win);
    }
    else{
        scor>targetNumber
        alert("you lose")
        lose ++
        $(".win").text(lose);
    }
    



    reset();
});
