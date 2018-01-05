function check() {

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;


    if (question1 == "56") {
        correct++;
}
    if (question2 == "Donald Trump"){
        correct++;
}
    if(question3 == "Franklin D. Roosevelt"){
         correct++;
}

var messages = ["Great job!", "That's just okay", "You really need to do a better"];
var pictures = ["images/win.jpg", "images/meh.jpg", "images/lost.png"];
//images folder is not in the correct spot. Had to move out of assets folder for file to be found. HELP! 

var range;

    if (correct < 1){
        range = 2
    }
    if (correct > 0 && correct < 3){
        range = 1;
    }
    if (correct > 2){
        range = 0;
    }

document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("picture").src = pictures[range];

}

