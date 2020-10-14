let nameButton = document.querySelector("#name-button");
let nameText = document.querySelector("#name-txt");
let highscoreList = document.querySelector(".high-score"); 
let container = document.querySelector("#container");
let startButton = document.querySelector(".startButton");
let resetButton = document.querySelector(".reset");
let buttons = document.querySelectorAll(".buttons");
let scoreBoard = document.querySelector(".scoreBoard");
let level = 0;
let userSequence = [];
let nextSequence = [];
let setHighScore = localStorage.setItem('highscore',15);
let highscore = localStorage.getItem('highscore');
let highScores = [];


nameButton.addEventListener('click', function storeScore(e) {
    e.preventDefault();
    if(nameText.value !== "") {
        let userValue = {name: "", score: ""};
        userValue.name = "Zac";
        userValue.score = highscore;
        highScores.push({userValue});
        highscoreList.innerHTML = `Name: ${userValue.name}\nScore: ${userValue.score}`;
        nameText.value = "";
} else (alert("You need to enter your name!!"));
});


function resetGame() {
    console.log(level);
    console.log(parseInt(highscore));
    if(highscore !== null){
        if (level > parseInt(highscore)) {
        localStorage.setItem('highscore',level);
        console.log(highscore);
        } else {
            localStorage.setItem('highscore',level);
        }
    }
    userSequence = [];
    nextSequence = [];
    level = 0;
    scoreBoard.textContent = level;
    container.setAttribute("class","cantClick");
}



function addSequence(btn) {
    userSequence.push(btn.getAttribute('data-button'));
    btn.classList.add('flash');
    // console.log(btn.dataset.button);

    const soundClick = document.querySelector(`[data-sound='${btn.dataset.button}']`);
    soundClick.play();

    setTimeout(() => {
        btn.classList.remove('flash');
    }, 250); 
    // console.log(userSequence);
    
    if( userSequence.length == nextSequence.length) {
    if (JSON.stringify(userSequence) == JSON.stringify(nextSequence)) {
            console.log("Good job, keep going")
            nextLevel()
   } else {
            resetGame();
            alert("You have lost, try again!");
        }
    }
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
    const sound = document.querySelector(`[data-sound='${color}']`);
    // console.log(color);
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
        scoreBoard.textContent = level;
        container.setAttribute("class","cantClick");
        userSequence = [];
        //array used to store current sequence + new Sequence
        nextSequence.push(randomStep());
        playLevel(nextSequence);
        // console.log(nextSequence)
        // } else {resetGame()};
    }

function startGame() {
    if (level == 0) {
    nextLevel();
} else {console.log("Game already going!");
}
}

startButton.addEventListener('click',startGame);
resetButton.addEventListener('click', resetGame);
// activateButton(random);
// console.log(green);


// const Errors = document.getElementById('error');

// function get_scores (callback) {
//   // High Score Data
//   let file = "scores.json";

//   // Fetch High Score Data
//   fetch(file, {cache: 'no-cache'})
//     .then(function(response) {
//         //  If the response isn't OK
//         if (response.status !== 200) {
//           Errors.innerHTML = response.status;
//         }
//         // If the response is OK
//         response.json().then(function(data) {
//           let scores = JSON.stringify(data);
//           console.log(scores);
//           callback (scores);
//         });
//       })
//     // If there is an error
//     .catch(function(err) {
//       Errors.innerHTML = err;
//     });
