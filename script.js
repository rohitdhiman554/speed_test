const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');
const start=document.querySelector('.startbutton');
const stop=document.querySelector('.stopbutton');

// List of words for game
const wordsEasy = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  
];
const wordsMedium=[
'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
  ];

const wordsHard=[
'acknowledgment',
'adjudicate',
'adversity',
'analogous',
'apprehension',
'assimilate',
'bemoan',
'boondoggle',
'condescending',
'enhancement'


];




// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Set difficulty to value in ls or medium



// Start counting down
  

start.addEventListener('click',function()
{

if(difficultySelect.value==='select')
{

  alert('please select level');
}
else
{

  var timeInterval = setInterval(updateTime, 1000);
     function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}
}
stop.addEventListener('click',function()
{

clearInterval(timeInterval);
gameOver();



})

}
);



 


// Generate random word from array
function getEasyWord() {
  return wordsEasy[Math.floor(Math.random() * wordsEasy.length)];
}

function getMediumWord() {
  return wordsMedium[Math.floor(Math.random() * wordsMedium.length)];
}
function getHardWord() {
  return wordsHard[Math.floor(Math.random() * wordsHard.length)];
}

// Add word to DOM
function addWordToDOM() {
  if(difficulty=='easy')
  {
      randomWord = getEasyWord();
  }
  else if(difficulty=='medium')
  {
     randomWord = getMediumWord();
  }
  else
  {
      randomWord = getHardWord();
  }
 
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time

// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
   `;

  endgameEl.style.display = 'flex';
}


// Event listeners

// Typing
text.addEventListener('input', e => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';

    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});


// Settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// Settings select

settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  addWordToDOM();


});

