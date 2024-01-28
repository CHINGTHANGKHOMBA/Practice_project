let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
  }

  updateScoreElement();
// if (!score){
//   score = {
//     Win: 0,
//     Losses: 0,
//     Tie : 0
//   }
// }

//using regular function

// let isautoPlaying = false;
// let intervalId;

// function autoPlay(){
//   if(!isautoPlaying){
//   intervalId = setInterval(function(){
//       const playerMove = pickComputerMove();
//       playGame(playerMove);
//     }, 2000);
//     isautoPlaying = true;
//   } else {
// clearInterval(intervalId);
// isautoPlaying = false;
//   }

//using addEventListner
document.querySelector('.js-rock-button')
.addEventListener('click', ()=> {
  playGame('rock');
})

//using arrow function
const autoPlay = () => {
  if(!isautoPlaying){
  intervalId = setInterval(()=>{
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isautoPlaying = true;
  } else {
clearInterval(intervalId);
isautoPlaying = false;
  }




  const buttonElement = document.querySelector('.js-autoPlay-button');
  if (buttonElement.innerHTML === 'Auto Play'){
      buttonElement.innerHTML = 'Stop';
      buttonElement.classList.add('is-Stop')
  } else {
      buttonElement.innerHTML = 'Auto Play';
      buttonElement.classList.remove('is-Stop')
  }
}

  function playGame(playerMove){
    const computerMove = pickComputerMove();     
  let result = '';
if (playerMove === 'scissors'){
  if (computerMove==='rock'){
  result = 'You lose.';
  } else if (computerMove === 'paper'){
  result = 'You win.';
  } else if (computerMove === 'scissors'){
  result = 'Tie.'
  } 
}

  else if (playerMove === 'paper'){
  if (computerMove==='rock'){
      result = 'You win.';
  } else if (computerMove === 'paper'){
      result = 'Tie.';
  } else if (computerMove === 'scissors'){
      result = 'You lose.'
  }
  }
  
  if (playerMove === 'rock'){
  if (computerMove==='rock'){
  result = 'Tie.';
  } else if (computerMove === 'paper'){
  result = 'You lose.';
  } else if (computerMove === 'scissors'){
  result = 'You Win.'
  } 
}
  
  if (result === 'You win.'){
    score.Wins+=1;
  } else if (result === 'You lose.'){
    score.Losses+=1;
  } else if (result === 'Tie.'){
    score.Ties+=1;
  }

  localStorage.setItem('score', JSON.stringify(score));
updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = 
`You<img src="${playerMove}-emoji.png" class="result-emoji">
<img src="${computerMove}-emoji.png" class="result-emoji">Computer`;

}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = 
`Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

function pickComputerMove(){
const randomNumber = Math.random();
let computerMove = '';

if (randomNumber >=0 && randomNumber < 1/3 ){
computerMove = 'rock';
} else if (randomNumber >=1/3 && randomNumber < 2/3){
computerMove = 'paper';
} else if (randomNumber >=2/3 && randomNumber < 1){
  computerMove = 'scissors';
}
return computerMove;
};