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
var currentQuestionIndex;
var randomQuestions;
var questionEl = document.querySelector("#question");
var answerBtnEl = document.querySelector("#answer-buttons");
var highScore = document.querySelector("#score-amount");
var score;
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
    setNextQuesion()
}
// this function to set the  questions
function showQestion(){
    questionEl.innerHTML = randomQuestions.question;
    /*answerBtnEl.text = randomQuestions.answers[0].text; 
    answerBtnEl.text = randomQuestions.answers[1].text; 
    answerBtnEl.text = randomQuestions.answers[2].text; 
    answerBtnEl.text = randomQuestions.answers[3].text; */
    
    for (var i = 0; i < randomQuestions.answers.length; i++) {
        console.log(randomQuestions.answers[i].text);
        document.querySelector(`.btn-${i}`).textContent = randomQuestions.answers[i].text;

    }
}
function setNextQuesion() {
 

}

function selectAnswer() {
    if (correct = true){
        score ++;
        localStorage.setItem("score", JSON.stringify(score));
        alert('Correct!');
    }else{
        timerCount - 5;
        alert('Wrong');
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
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
      }
    }, 1000);
  }

  function submit(){
    document.querySelector("#submit").style.visibility = "visible";
    document.querySelector("#questions-container").style.visibility = "hidden";

  }


