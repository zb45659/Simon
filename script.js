let nameButton = document.querySelector("#name-button");
let buttons = document.querySelectorAll(".buttons");
let startButton = document.querySelector(".startButton");
let resetButton = document.querySelector(".reset");

let container = document.querySelector("#container");
let scoreBoard = document.querySelector(".scoreBoard");
let nameText = document.querySelector("#name-txt");
let highscoreList = document.querySelector(".high-score"); 

let setHighScore = localStorage.setItem('highscore',15);
let highscore = localStorage.getItem('highscore');

let userSequence = [];
let nextSequence = [];
let highScores = [];
let level = 0;




function resetGame() {
    if(highscore !== null){
        if (level > parseInt(highscore)) {
        localStorage.setItem('highscore',level);
        } else {
            localStorage.setItem('highscore',level);
    }}
    userSequence = [];
    nextSequence = [];
    level = 0;
    scoreBoard.textContent = level;
    container.setAttribute("class","cantClick");
}

function addSequence(btn) {
    userSequence.push(btn.getAttribute('data-button'));
    btn.classList.add('flash');

    const soundClick = document.querySelector(`[data-sound='${btn.dataset.button}']`);
    soundClick.play();

    setTimeout(() => {
        btn.classList.remove('flash');
    }, 250); 
    
    if( userSequence.length == nextSequence.length) {
    if (JSON.stringify(userSequence) == JSON.stringify(nextSequence)) {
            nextLevel()
   } else {
            resetGame();
            alert("You have lost, try again!");
}}}

function buttonClicked() {
    for (let i = 0; i < buttons.length; i++){
        buttons[i].onclick = function() {
            addSequence(this);
}}}

function activateButton(color) {
    const button = document.querySelector(`[data-button='${color}']`);
    const sound = document.querySelector(`[data-sound='${color}']`);

    button.classList.add('flash');
    sound.play();

    setTimeout(() => {
        button.classList.remove('flash');
    }, 1000);    
}

function playLevel(newSequence) {
    newSequence.forEach((color, index) => {
        setTimeout(() => {
            activateButton(color);
        }, (index + 1) * 1500);
        setTimeout(() => {
            container.classList.remove("cantClick");
            }, (index +1) * 2500);
})}

function randomStep() {
    const buttons = ['green','red','yellow','blue'];
    const random = buttons[Math.floor(Math.random() * buttons.length)];
    return random;
}

function nextLevel() {
    level += 1;
    scoreBoard.textContent = level;
    container.setAttribute("class","cantClick");
    userSequence = [];
    nextSequence.push(randomStep());
    playLevel(nextSequence);
}

function startGame() {
    if (level == 0) {
    nextLevel();
} else {alert("Game already going!");
}}

startButton.addEventListener('click',startGame);
resetButton.addEventListener('click', resetGame);

nameButton.addEventListener('click', function storeScore(e) {
    e.preventDefault();
    if(nameText.value !== "") {
        let userValue = {name: "", score: ""};
        userValue.name = "Zac";
        userValue.score = highscore;
        highScores.push({userValue});
        highscoreList.innerHTML = `Name: ${userValue.name} Score: ${userValue.score}`;
        nameText.value = "";
} else (alert("You need to enter your name!!"));
})