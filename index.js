const scores = JSON.parse(localStorage.getItem('store'));
 const score = scores || {
    wins:0,
    losses:0,
    ties:0
};

showScore();

function showScore(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

function gameStart(){
     const randomNumber = Math.random();
     let computerMove = '';
     if(randomNumber >= 0 && randomNumber <= 1/3){
        computerMove = 'rock'
     } else if(randomNumber >= 1/3 && randomNumber <= 2/3 ){
        computerMove ='paper'
     } else if(randomNumber >= 2/3 && randomNumber <= 1 ){
        computerMove ='scissors'
     }
     return computerMove;
};


function showGame(playerMove){
    
    const computerMove = gameStart();
    let result = '';
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie'
        } else if (computerMove === 'paper') {
         result = 'You lose'   
        } else if (computerMove === 'scissors') {
         result = 'You win'   
        }
    } else if(playerMove === 'paper') {
        if (computerMove === 'rock') {
            result ='You win'
        } else if (computerMove === 'paper') {
         result = 'Tie'   
        } else if (computerMove === 'scissors') {
         result = 'You lose'   
        }
    } else if(playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result ='You lose'
        } else if (computerMove === 'paper') {
         result = 'You win'   
        } else if (computerMove === 'scissors') {
         result = 'Tie'   
         } 
   }

   if (result === 'You win') {
        score.wins +=1
   } else if(result === 'You lose') {
       score.losses +=1
   } else if(result === 'Tie'){
    score.ties +=1
   }



   localStorage.setItem('store', JSON.stringify(score));

   showScore();

   document.querySelector('.js-result').innerHTML = result;
   document.querySelector('.js-option').innerHTML = `You <img src = "/ICONS/${playerMove}-emoji.png"> while Computer <img src = "/ICONS/${computerMove}-emoji.png">`;

};
   

/* RESET GAME SECTION*/
function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('store');
    showScore();
    alert('Game has reset');
};

//ANOUNCEMENT OF RESULT 
function alertResult() {
    if (score.wins === 10) {
        alert('Congratulations you have won 10 times')
    } else if (score.losses === 10) {
        alert('You have failed miserably my friend. Losing 10 times is a shame');
        resetGame();
    } else if (score.ties === 10) {
        alert('Keep going, You are almost there')
    }
};
