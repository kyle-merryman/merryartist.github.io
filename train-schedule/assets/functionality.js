var trains = [galvani, soul, penydarren, steam, loco];

//object per train - will store 
var galvani = {
    name: "Galvani",
    destination: "Edinburgh",
    firstTrain: 1700,
    frequency: 100,
    nextTrain: ""
}

var soul = {
    name: "Soul",
    destination: "Chicago",
    firstTrain: 100,
    frequency: 30,
    nextTrain: ""
}

var penydarren = {
    name: "Penydarren",
    destination: "Penydarren",
    firstTrain: 1500,
    frequency: 1000,
    nextTrain: ""
}

var steam = {
    name: "Steam",
    destination: "Ohio",
    firstTrain: 130,
    frequency: 90,
    nextTrain: ""
}

var loco = {
    name: "Loco",
    destination: "Mexico City",
    firstTrain: 1500,
    frequency: 200,
    nextTrain: ""
}

console.log(loco);

//initalize html
for (i = 0; i < trains.length; i++) {

/*var trainName = trains[i].name;
console.log(trains[i].name);*/
var trainName = this.name;
console.log(this.name);
$(".name").append(trainName);
  console.log(trainName);

$(".dest.").append(this.destination);
$(".train1").append(this.firstTrain).text();
$(".freq.").append(this.frequency).text();
$(".next").append(this.nextTrain);
}

//create firebase

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZDqbIO0RpPrR-eyxBL7yWYDxRqT2KPSw",
    authDomain: "bootcamp-classwork.firebaseapp.com",
    databaseURL: "https://bootcamp-classwork.firebaseio.com",
    projectId: "bootcamp-classwork",
    storageBucket: "bootcamp-classwork.appspot.com",
    messagingSenderId: "956217697979"
  };
  //initialize the app
  firebase.initializeApp(config);

  //create variable to store database reference
  var database = firebase.database();

//for loop
/*for (i = 0; i < trains.length; i++) {
  database.ref('/accounts/').push(trains[i]);
}*/

  //push array of trains to database
  database.ref('/station/').push(trains);

//---------------------------GENERATE TRAINS-----------------------------//
  
  //loop through each train object
  for (i = 0; i < trains.length; i++) {
    database.ref('/station/trains/name/').on("child_added", function(snapshot) {
      var name = snapshot.val();
      $(".name").empty();
      $(".name").push(name);
    };
    database.ref('/station/trains/destination/').on("child_added", function(snapshot) {
      var destination= snapshot.val();
      $(".dest.").empty();
      $(".dest.").text(destination);
    };
    database.ref('/station/trains/firstTrain/').on("child_added", function(snapshot) {
      var firstTrain = snapshot.val();
      $(".train1").empty();
      $(".train1").text(firstTrain);
    };
    database.ref('/station/trains/frequency/').on("child_added", function(snapshot) {
      var frequency = snapshot.val();
      $(".freq.").empty();
      $(".freq.").text(frequency);
    };
    database.ref('/station/trains/nextTrain/').on("child_added", function(snapshot) {
      var nextTrain = snapshot.val();
      $(".next").empty();
      $(".next").text(nextTrain);
    }
    //push to html divs

  



  }

for (i = 0; i < trains.length; i++) {
  //initialize variables
  var frequency = database.ref("/trains/");

}

//convert time to minutes, hours


//w/i on click event - link vars to html ".val().trim()"

//use "database" var to pass objects to firebase


//to use MOST RECENT info and update: database.ref().on(“value”, function(snapshot) {
    //$(“#ID”).text(snapshot.val().VAR);
//});*/
