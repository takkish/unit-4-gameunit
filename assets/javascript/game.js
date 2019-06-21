var win = 0;
var lose = 0;
var crystl = 0;
var scor;
var targetNumber;



$(document).ready(function () {
    function reset() {
        // when you win or lose
        // reset score
        // reset random number
        // reset random crystal numbers
        scor = 0;
        targetNumber =Math.floor(Math.random() * 110) + 20;
        // define four random numbers for each crystal
        var random1 = Math.floor(Math.random() * 12) + 1;
        $("#crystl1").attr("crystl-data",random1);
        var random2 = Math.floor(Math.random() * 12) + 1;
        $("#crystl2").attr("crystl-data",random2);
        var random3 = Math.floor(Math.random() * 12) + 1;
        $("#crystl3").attr("crystl-data",random3);
        var random4 = Math.floor(Math.random() * 12) + 1;
        $("#crystl4").attr("crystl-data",random4);
        $(".target").text("Target:" + targetNumber);
        $(".score").text(scor);
    }
    
   
    $(".target").text("Target:" + targetNumber)
    // Notice I didn't set $(".jumbotron") to a var this time?
    // If you only plan to use that selector once it doesn't need to be a var
    $(".crystal").on("click", function () {
        var crystldata = $(this).attr("crystl-data");
        scor = scor + parseInt(crystldata);
       

        $(".score").text(scor);
        if (scor === targetNumber) {
            $(".win").text("win:" + ++win)
            reset();
        }
        else if (scor > targetNumber) {
            $(".lose").text("lose:" + ++lose)
            reset();
        }

    });

   


    reset();
});
