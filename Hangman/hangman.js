var wordList = ['tyrannosaurs', 'velociraptor', 'triceratops', 'brachiosaurus', 'stegosaurus', 'allosaurus', "funny", "jawbreaker", "jackpot", "witchcraft", "fishhook", "cobweb", "haiku", "zodiac", "xylophone", "vodka", "puppy"]     // array of words
var winCheck = false;
var wins = {counter: 0, currentGame: false};
var losses = 0;
var ww = "";
var underscoreContainer = [];
var guessCount = 10;
var lettersGuessed = [];
var arrayOfWinningWord;
document.getElementById("wins").append(wins.counter);
document.getElementById("guessesLeft").append(guessCount);
document.getElementById("lettersGuessed").append(lettersGuessed);
// random a word        
ww = wordList[Math.floor(Math.random() * wordList.length)];
console.log(ww);
// split picked word into letter array
var arrayOfWinningWord = ww.split('');
console.log(arrayOfWinningWord);

//create a for loop which pushes each letter out on the document as an "_"
function printUnderscore() {
    for (i = 0; i < arrayOfWinningWord.length; i++) {
        underscoreContainer.push("_");
    } 
    // document.getElementById("ww").append(printUnderscore());
    console.log(underscoreContainer);
    document.getElementById("theWord").append(underscoreContainer); 
    //document.getElementById("theWord").innerHTML = underscoreContainer;  
    //$("theWord").html(underscoreContainer); 
}

printUnderscore();  

//lettersGuessed.contains(userGuess)
//if (underscoreContainer.join("") == arrayOfWinningWord.join(""));
//else if (underscoreContainer.join("") == arrayOfWinningWord.join("")) {
    //console.log("You win!");

//WIN CONDITION
    if (underscoreContainer.join[i] !== arrayOfWinningWord.join[i]) {
        event.stopPropogation();
  } else {
        wins.currentGame = true;
        wins.counter++;
  }



/*if (underscoreContainer.join("") == arrayOfWinningWord.join("")) {
    console.log("You win!");
}
if (guessCount = 0) {
    console.log("you lose!");
}*/    
//ONKEY EVENT
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    if (lettersGuessed.indexOf(userGuess) !== -1) {
        event.stopPropogation();
    } else {
        guessCount--; 
        lettersGuessed.push(userGuess);
        console.log(userGuess);
        console.log(lettersGuessed);
    } 
}
    // If letter is not in array, add it to list of absent letters


    // if (!ww.contains(userGuess)) {
    //     lettersGuessed.append(userGuess);
    //     console.log(lettersGuessed);
    // }

    //fill the correct answer into right underscore position
    if (arrayOfWinningWord.contains(userGuess)) {
        for (j = 0; j < arrayOfWinningWord.length; j++) {
            if (arrayOfWinningWord[j] == userGuess) {
                underscoreContainer[j] = userGuess.toUpperCase();
                console.log(underscoreContainer);
            }
        }
    } else { 
        lettersGuessed.append(userGuess);
        console.log(lettersGuessed);
        console.log(underscoreContainer);
    } 
    //Check winning condition
    //if(underscoreContainer.indexOf("_") === -1){wins ++; console.log("You Win!")}    


//

//user guess has to be a letter
        


      

//if (userGuess = lettersGuess)
