let counterLose = 0, counterWins = 0, counterDraw = 0;

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    let playerMove = argButtonName;

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);

    displayResult(playerMove, computerMove);
}

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if(argMoveId == 1){
        return 'kamień';
    } else if(argMoveId == 2) {
        return 'papier';
    } else if(argMoveId == 3) {
        return 'nożyce';
    }else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
} 

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if(argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('You win!');
        counterWins++;
    } else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('You win!');
        counterWins++;
    } else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('You win!');
        counterWins++;
    } else if(argPlayerMove == argComputerMove) {
        printMessage('Its draw!');
        counterDraw++;
    } else {
        printMessage('You lose :(');
        counterLose++;
    }
  
    printMessage('I played ' + argComputerMove + ', and You played ' + argPlayerMove);
    printResult('The amount of winnings is: ' + counterWins + '. The number of losers is: ' + counterLose + '. The number of draws is: ' + counterDraw + '.')
}

buttonRock.addEventListener('click', function() { 
    buttonClicked('kamień'); 
});
buttonPaper.addEventListener('click', function() { 
    buttonClicked('papier'); 
});
buttonScissors.addEventListener('click', function() { 
    buttonClicked('nożyce'); 
});