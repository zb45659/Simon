// let green = document.getElementsByClassName("green");
// let red = document.getElementByClassName("red");
// let yellow = document.getElementByClassName("yellow");
// let blue = document.getElementByClassName("blue");
let startButton = document.querySelector(".start");
let level = 0;
let userSequence = [];
let nextSequence = [];
let buttons = document.querySelectorAll(".buttons")

function resetGame() {
    alert("You have lost, try again!");
    userSequence = [];
    nextSequence = [];
    level = 0;
}



function addSequence(btn) {
    userSequence.push(btn.getAttribute('data-button'));
    btn.classList.add('flash');
    
    setTimeout(() => {
        btn.classList.remove('flash');
    }, 250); 
    console.log(userSequence);

    if (userSequence.length == nextSequence.length) { 
    if (JSON.stringify(userSequence) == JSON.stringify(nextSequence)) {
        console.log("Good job, keep going")
        nextLevel()
    } else {resetGame()};
    } else {console.log("more buttons needed")};
}

function buttonClicked() {
    for (let i = 0; i < buttons.length; i++){
        buttons[i].onclick = function() {
            addSequence(this);
    }
}
}

function activateButton(color) {
    const button = document.querySelector(`[data-button='${color}']`);
    
    button.classList.add('flash');
    
    setTimeout(() => {
        button.classList.remove('flash');
    }, 1000);    
}

function playLevel(newSequence) {
    newSequence.forEach((color, index) => {
        setTimeout(() => {
            activateButton(color);
        }, (index + 1) * 1500);
    });
}

function randomStep() {
    const buttons = ['green','red','yellow','blue'];
    const random = buttons[Math.floor(Math.random() * buttons.length)];
    return random;
}

function nextLevel() {
    // if (JSON.stringify(userSequence) == JSON.stringify(nextSequence)) {
    level += 1;
    userSequence = [];
    //array used to store current sequence + new Sequence
    nextSequence.push(randomStep());
    playLevel(nextSequence);
    console.log(nextSequence)
    // } else {resetGame()};
}

function startGame() {
    nextLevel();
}

startButton.addEventListener('click',startGame);

// activateButton(random);
// console.log(green);
