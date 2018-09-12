var wordList = ['sarsaparilla', 'sawbones', 'rattler', 'coyote', 'cowboy'];
var chosenWord = "";
var wordDisplay = [];
var wordToLetter = [];

var winCheck = false;
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

//picks the word from wordList
chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
//log
console.log(chosenWord);

//converts chosenWord to a letter array
wordToLetter = chosenWord.split('');
//log
console.log(wordToLetter);

//displays chosenWord as a series of "_" per letter (using wordToLetter array)
function printUnderscore() {
    for (i=0; i<wordToLetter.length; i++) {
        wordDisplay.push("_");
    }
    //log
    console.log(wordDisplay);
    //display
    document.getElementById("theWord").append(wordDisplay); 
}
//call
printUnderscore();

//button click function
document.onkeyup = function (event) {
    //converts key click to lower case
    var userGuess = event.key.toLowerCase();

    //IF any index w/i wordToLetter array = the userGuess
    if (wordToLetter.indexOf(userGuess) !== -1) {
    //loop comparing each letter in the wordToLetter array to userGuess
        for (i=0; i < wordToLetter.length; i++) {
            //for each match, replace that indexed "_" with userGuess letter in wordDisplay
            if (wordToLetter[i] == userGuess) {
                wordDisplay[i] = userGuess.toUpperCase();
                //log
                console.log(wordDisplay)
            }
        } 
        //ELSE:
    } else {
        //1. append userGuess's letter to lettersGuessed (if doesn't match item in that array)
        if (lettersGuessed.indexOf(userGuess) == -1) {
            lettersGuessed.append(userGuess);
        }
        //2. -1 from guessesLeft
        guessesLeft--;
        //log both
        console.log("Incorrect letters already guessed: " + lettersGuessed);
        console.log("You have " + guessesLeft + " guesses left.");
    }

    //IF wordDisplay = wordToLetter
    if (wordDisplay == wordToLetter) {
        //set winCheck to true
        winCheck = true;
    }
        
    //IF guessesLeft < 1
    if (guessesLeft < 1) {
        //+1 to losses
        losses++;
        //change the wordDisplay to reveal the whole word (chosenWord)
        wordDisplay = chosenWord;
        //pop up saying you lost, and instructions to press restart button to replay
        alert("You lost! Press RESTART to try again");
    }

//end of button
}

//IF you won (winCheck = true) 
    if (winCheck == true) {
        //stop keyclick functionality - can only use restart button
            /*document.getElementById("NAME OF CLICK FUNCTION").onkeyup = null;*/
        //+1 to wins
        wins++;
        //pop up saying you won, and instructions to press restart button to replay
        alert("You won! Press RESTART to boost your score");
    }
    
                
//restartButton, when clicked
$('#restartButton').on('click', function (e) {
    //set winCheck to false
    winCheck = false;
    //set guessesLeft to 10
    guessesLeft = 10;
    //redefine lettersGuessed as empty array
    lettersGuessed = [];
})

    



//--------------------ERROR-TESTS----------------------

//line30 won't process .push in place of .append
//I changed it to an array, but still alerted ".push is not a function"
    var data = new Array();
    data.push({"country": "IN"});
    /*console.log(data);*/
//however, the above code logs properly

//why would it be better to do .contains vs .indexOf when checking 
//if (wordToLetter.indexOf(userGuess) !== -1) {