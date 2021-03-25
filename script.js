//Global Variables
/*
  Pattern is secret pattern
  Progress is integer that tracks progress of player
*/
// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

var guessCounter = 0;
var pattern = [5,6,1,2,3,4]
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var loseCounter = 0;

/* Create function that starts up our game*/
function startGame(){
    //initialize game variables
    progress = 0;
    loseCounter = 0;
  
    gamePlaying = true;
    // swap the Start and Stop buttons (hide start and unhide stop)
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  // swap the Start and Stop buttons (hide start and unhide stop)
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}



/* Sound portion of the Game*/
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 999,
  4: 201,
  5: 555,
  6: 666
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

/* Function for lighting / clearing button*/
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

/* Function for playing a single clue*/
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn); // Built in func
  }
}

/* Use for loop for each clue
  For each clue, use playSingleClue
  Don't want all clues to play at same time, so use delay
  */
function playClueSequence(){
  guessCounter = 0; // Keep track of where user is in clue sequence
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}
/* Check user responses */
function loseGame(){
  stopGame();
  shuffle(pattern);
  alert("Game Over. You lost."); // Built in that flashes msg

}

function winGame(){
  stopGame();
  shuffle(pattern);
  alert("Game Over. You won!");
}
function shuffle(arr){
    //Shuffle after each win / lose
    pattern.sort(() => Math.random() - 0.5);
}

/* Handling guesses - guess function */
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if (pattern[guessCounter] == btn){
    // Guess is correct
    if (guessCounter == progress){
      if (progress == pattern.length-1){
        winGame();
      }
      else{
        // Pattern correct, so add next segment
        progress += 1;
        playClueSequence();
      }
    }
    else{
      // So far so good, check the next guess
      guessCounter += 1;
    }
  }
  else{
    // Pattern is incorrect, so we lose
    loseCounter += 1;
    if (loseCounter == 3) {
      loseGame(); 
    }
  }
} 

