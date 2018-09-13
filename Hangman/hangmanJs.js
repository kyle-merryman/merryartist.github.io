var wordList = ['sarsaparilla', 'sawbones', 'rattler', 'coyote', 'cowboy', 'buffalo', 'geronimo', 'crockett', 'prospector', 'gold', 'train', 'rail', 'spittoon', 'mine', 'hillbilly', 'country', 'whiskey', 'townie'];
var chosenWord = "";
var wordDisplay = [];
var wordToLetter = [];

var winCheck = 0;
var wins = 0;
    document.getElementById("wins").append(wins);
var losses = 0;
    document.getElementById("losses").append(losses);
var guessesLeft = 10;
    document.getElementById("guessesLeft").append(guessesLeft);
var lettersGuessed = document.getElementById("lettersGuessed");


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
        //print updated wordToLetter to wordDisplay
        $("#theWord").empty();
        this.getElementById("theWord").append(wordDisplay);
        //log
        console.log(wordDisplay)

        //ELSE:
        } else {
            //if doesn't match item in array
            if ($.inArray(userGuess, lettersGuessed) == -1) {
                //1. append userGuess's letter to lettersGuessed
                lettersGuessed.append(userGuess);
                    //print new array
                    this.getElementById("lettersGuessed").append(userGuess)
                    //log
                    console.log(wordDisplay)

                //2. -1 from guessesLeft
                guessesLeft--;
                    //empty & replace with updated guessesLeft
                    $("#guessesLeft").empty();
                    this.getElementById("guessesLeft").append(guessesLeft)
                //log both
                console.log("Incorrect letters already guessed: " + lettersGuessed);
                console.log("You have " + guessesLeft + " guesses left.");
            }
        
        
        }

    //IF wordDisplay = wordToLetter
    if (wordDisplay.join(' ') == wordToLetter.join(' ')) {
        //set winCheck to true
        winCheck = true;
    }
        
    //IF guessesLeft < 1
    if (guessesLeft < 1) {
        //pop up saying you lost, and instructions to press restart button to replay
        alert("You lost! Press RESTART to try again");
        //+1 to losses
        losses++;
        //change the wordDisplay to reveal the whole word (chosenWord)
        this.getElementById("wordDisplay").append(wordToLetter);
        
    }

//end of button
}

//IF you won (winCheck = true) 
    if (wordDisplay.indexOf("_") == -1) {
        //stop keyclick functionality - can only use restart button
            /*document.getElementById("NAME OF CLICK FUNCTION").onkeyup = null;*/
        //+1 to wins
        wins++;
        //pop up saying you won, and instructions to press restart button to replay
        alert("You won! Press RESTART to boost your score.");
    }
    
                
//restartButton, when clicked
$('#restartButton').on('click', function (e) {
    //set winCheck to false
    winCheck = 0;
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
//if (wordToLetter.indexOf(userGuess) !== -1) {}

//lines 58-63 not adding to lettersGuessed or subtracting 1 from guessesLeft
    //is .indexOf not used properly? try .inArray instead:
        //no noticeable change.
    //works fine as alerts. see if you have to re-assign var to html array each time
        

//lines 45-55 not updating word onscreen, instead appending an updated array each time
    //try .replaceWith()
        //now won't print letters at all
    //try .empty()
        //same as .replaceWith()
    //try plain javascript -> wordDisplay = []; then getElement again to update
        //still appending, this time adding 0 to end of wordDisplay as a number
    //try making corresponding vars = getElementById
        //no change
    //try .replaceWith(wordDisplay)
        //works first for first correct key pressed (but prints in unstyled text)
        //any following keys are met with alert -> Uncaught TypeError: cannot read property 'replaceWith' of Null
    //try .replaceAll()
//SOLVED FOR wordDisplay, was missing # for $("#theWord").empty();

//line98 you Win not working
    //instead of wordDisplay.join(' ') == wordToLetter.join(' '), try finding if any "_" are still in array, and if not, win = true
        //no change
    //replace w/ ($.inArray("_", wordDisplay) == -1) {}
        //no change
    //replace w/ if (wordDisplay.indexOf("_") == -1) {}
        //no change

//lettersGuessed array printing 2x per keyup
    //remove lettersGuessed.append(userGuess) and replace with this.getElementById("lettersGuessed").append(userGuess);
                //empty div, print new array
                //$("#lettersGuessed").empty();
                    //is able to empty, but that means only the last incorrect letter pressed is displayed
                    //FOR NOW: will revert to 2x printing, since it aids user in seeing all incorrect letters

//loss condition not working - 




    