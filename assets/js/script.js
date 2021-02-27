//setting the other pages hidden by defualt
document.querySelector("#questions-container").style.visibility = "hidden";
document.querySelector("#submit").style.visibility = "hidden";
document.querySelector("#highscores").style.visibility = "hidden";
//declare the start button
var startButton = document.querySelector("#startBtn");
//get the time id to set it in the timer function
var countdown = document.querySelector("#countdown");
var timer;
var timerCount;
var index = 0;
var currentQuestionIndex;
var randomQuestions;
var messg = document.querySelector("#messg")
var questionEl = document.querySelector("#question");
var answerBtnEl = document.querySelector("#answer-buttons");
var highScore = document.querySelector("#score-amount");
var score = 0;
var initial;
var inputInitial = document.querySelector("#text");
var submitInitial = document.querySelector("#initial-submit")
var submitBtn = document.querySelector(".btn");
var goBack = document.querySelector(".goback-btn");
var initialScore = document.querySelector("#score-output");
var clear = document.querySelector(".clear-btn");

//addEventListener to the start button and put the startQuiz function in side
startButton.addEventListener('click', startQuiz);
function startQuiz(){
    console.log("Start");
    document.querySelector(".startingPage").style.visibility = "hidden";
    document.querySelector("#questions-container").style.visibility = "visible";
    randomQuestions = questionsArr[Math.floor(Math.random() * questionsArr.length)];
    timerCount = 20;
    startTimer()
    showQestion()
    
}
// this function to set the  questions
function showQestion(){
    questionEl.innerHTML = randomQuestions.question;
    answerBtnEl.innerHTML = "";
    for (var i = 0; i < randomQuestions.answers.length; i++) {
        console.log(randomQuestions.answers[i].text);
        var button = document.createElement("button");
        button.setAttribute("style", " background-color:#c9edff; padding: 20px;font-family: 'Courier New', Courier, monospace;font-weight: bold;font-size: 16;border-radius: 8px; margin:20px;");
        button.textContent = randomQuestions.answers[i].text;
        button.setAttribute("value",randomQuestions.answers[i].correct);
        button.setAttribute("class","answerBtn");
        button.onclick =  function(){
            console.log(this.value);
        if (this.value === 'true'){
            score ++;
            //localStorage.setItem("score", JSON.stringify(score));
            localStorage.setItem("score", score);
            alert('Correct!');
        }else{
            timerCount = timerCount - 5;
            if (timerCount <= 0) {
                clearInterval(timerCount);
                allDone();
              }
            alert('Wrong');
        }
        setNextQuesion()
    }
        answerBtnEl.appendChild(button);

    }
    
}
function setNextQuesion() {
    randomQuestions = questionsArr[Math.floor(Math.random() * questionsArr.length)];
    console.log(randomQuestions);
    showQestion()
    if(randomQuestions === 0){
        allDone();
    }
}

var questionsArr = [
    {
        question: 'what is 5 + 5?',
        answers: [
            {text: '10', correct: true},
            {text: '20', correct: false},
            {text: '33', correct: false},
            {text: '13', correct: false}
        ]
    },
    {
        question: 'what is 100 - 20?',
        answers: [
            {text: '90', correct: false},
            {text: '55', correct: false},
            {text: '80', correct: true},
            {text: '63', correct: false}
        ]
    },
    {
        question: 'what is 9 * 9?',
        answers: [
            {text: '81', correct: true},
            {text: '100', correct: false},
            {text: '49', correct: false},
            {text: '64', correct: false}
        ]
    }
]
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      countdown.textContent = timerCount;
      if (timerCount <= 0) {
        // Clears interval
        clearInterval(timer);
        allDone();
      }
    }, 1000);
  }

 function allDone(){
    document.querySelector("#submit").style.visibility = "visible";
    document.querySelector("#questions-container").style.visibility = "hidden";
    //var score = JSON.parse(localStorage.getItem("score"));
    localStorage.getItem("score");
    highScore.textContent = score;
    if (inputInitial === "value"){
    localStorage.setItem("initial",initial);
    }
    //storeInitial()
  }
  //this function save the inital in the localstorage
  //function storeInitial() {
   
    //event.preventDefault();
   // localStorage.setItem("initial", JSON.stringify(initial));
     /*var scoreAndInitial ={
        score : score.value,
        initial : inputInitial.value.trim()
    }
    localStorage.setItem("scoreAndInitial", JSON.stringify(scoreAndInitial));*/
  //}
  //Submition function for Initial
  submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector("#submit").style.visibility = "hidden";
    document.querySelector("#highscores").style.visibility = "visible";
    var sI = localStorage.getItem("initial");
    initialScore.textContent = sI;
    });

 //Go back button
 goBack.addEventListener("click", function(){
     document.querySelector("#highscores").style.visibility = "hidden";
     document.querySelector(".startingPage").style.visibility = "visible";
 });
 //Clear button
 clear.addEventListener("click", function() {
     initialScore.textContent = '';
 })
  



