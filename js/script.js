var computerMove, playerMove, playerInput, randomNumber, buttonScissors, buttonPaper, buttonRock, conuterLose, counterWins, counterDraw;

buttonRock=document.getElementById('button-rock');
buttonPaper=document.getElementById('button-paper');
buttonScissors=document.getElementById('button-scissors');

conuterLose=0;
counterWins=0;
counterDraw=0;

function buttonClicked(argButtonName){
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    playerMove=argButtonName;

    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);

    computerMove=getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);

    displayResult(playerMove, computerMove);
}

function getMoveName(argMoveId){
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if(argMoveId == 1){
        return 'kamień';
    } else if(argMoveId==2){
        return 'papier';
    } else if(argMoveId==3){
        return 'nożyce';
    }else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
} 

function displayResult(argPlayerMove, argComputerMove){
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
        printMessage('Wygrywasz!');
        counterWins++;
    } else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
        printMessage('Wygrywasz!');
        counterWins++;
    } else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
        printMessage('Wygrywasz!');
        counterWins++;
    } else if(argPlayerMove==argComputerMove){
        printMessage('Remis!');
        counterDraw++;
    } else {
        printMessage('Przegrywasz :(');
        conuterLose++;
    }
  
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    printResult('Ilość wygranych to: '+counterWins+'. Ilość przegranych to: '+conuterLose+'. Ilośc remisów to: '+counterDraw+'.')
}

buttonRock.addEventListener('click', function(){ 
    buttonClicked('kamień'); 
});
buttonPaper.addEventListener('click', function(){ 
    buttonClicked('papier'); 
});
buttonScissors.addEventListener('click', function(){ 
    buttonClicked('nożyce'); 
});