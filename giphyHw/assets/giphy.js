var genre = ["sci-fi", "noir", "horror", "golden-age"];

// Function for displaying movie data
function createButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#gifDisplay").empty();

    // Looping through the array of movies
    for (var i = 0; i < genre.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var b = $("<button>");
      // Adding a class
      b.addClass("gif");
      // Adding a data-attribute with a value of the movie at index i
      b.attr("data-name", genre[i]);
      // Providing the button's text with a value of the movie at index i
      b.text(genre[i]);
      // Adding the button to the HTML
      $("#movies-view").append(a);
    }
  }

  $("#select").on("click", function() {
    console.log("button clicked");
    createButtons();
  });

  $(".test").click(function() {
    console.log("button clicked");
  });




/*var topics = [, , , ];

for (i = 0; i < topics.length; i++) {
    //create button through js

    //attach ids to it
        //.attr(attr name, attr value);
    //append it
        //.appendTo(topics);
}

//change this to giphy API, and place within a function including the ajax call
//var movie = $(this).attr("data-name");

//var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy"; //replace with gif link and var




//var search = $("#form").val().trim();
var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=8mpCOkhSU8hQlwnWFJbMdXde9q8FEGsL&tag="; //+ search;
console.log(queryURL);

$("#select").on("click", function(){
//call ajax object FIRST
    console.log("succesful button click");

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        //console.log(response.data);
        //variable holding the data from the ajax call = API as an object
        var results = response.data;
        console.log(results);
        //creates a variable of the HTML element which will hold the gifs
        var gifDisplay = $("#gifDisplay"); //create a variable for the tbody
        var theRow = $("<tr>"); // create a variable for the row
                                // create var for gif within the row
        gifDisplay.append(); //append the gifs to the row
  
    })

});

//animate & pause gif

$(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });


/*
// Creating a div to hold the movie
var movieDiv = $("<div class='movie'>");

// Storing the rating data
var rating = response.Rated;

// Creating an element to have the rating displayed
var pOne = $("<p>").text("Rating: " + rating);

// Displaying the rating
movieDiv.append(pOne);

// Retrieving the URL for the image
var imgURL = response.Poster;

// Creating an element to hold the image
var image = $("<img>").attr("src", imgURL);

// Appending the image
movieDiv.append(image);

// Putting the entire movie above the previous movies
$("#movies-view").prepend(movieDiv);



//prevent duplicates when appending, can update with user-entered search buttons

// Function for displaying movie data
function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < movies.length; i++) {*/















        console.log(response.data);
        //variable holding the data from the ajax call = API as an object
        var results = response.data;
        console.log(results);
        //creates a variable of the HTML element which will hold the gifs
        var gifDisplay = $("#gif-display"); //create a variable for the element
        var theRow = $("<tr>"); // create a variable for the row
                                // create var for gif within the row
        gifDisplay.append(); //append the gifs to the row

        
        
        // Looping over every result item
        for (var i = 0; i < results.length; i++) {

// Only taking action if the photo has an appropriate rating
if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
  // Creating a div for the gif
  var gifDiv = $("<div>");

  // Storing the result item's rating
  var rating = results[i].rating;

  // Creating a paragraph tag with the result item's rating
  var p = $("<p>").text("Rating: " + rating);

  // Creating an image tag
  var personImage = $("<img>");

  // Giving the image tag an src attribute of a proprty pulled off the
  // result item
  personImage.attr("src", results[i].images.fixed_height.url);

  // Appending the paragraph and personImage we created to the "gifDiv" div we created
  gifDiv.append(p);
  gifDiv.append(personImage);

  // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
  $("#gifs-appear-here").prepend(gifDiv);
  
  }




        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var genre = $("#genre-input").val().trim();
        // The movie from the textbox is then added to our array
        genreButtons.push(genre);

        var rating = $("#rating-input").val().trim();

        // calling renderButtons which handles the processing of our movie array
        renderButtons();

        console.log(queryURL);
      });


})
</script> 
</body>
</html>


<!--<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Quoth the Giphy</title>
</head>

<body>
  <button data-person="Arnold Schwarzenegger">I'll be back</button>
  <button data-person="Michael J Fox">
    My happiness grows in direct proportionto my acceptance,
    and in inverse proportion to my expectations.
  </button>-->
  <!-- STEP TWO: between the dashed lines below
        * add three more buttons
        * add a data-person attribute of famous people you know
        * with a quote said by them -->

  <!--  -->

  <!--<button data-person="Lucille Ball">
    Love yourself first and everything else falls into line.
  </button>
  <button data-person="Taylor Swift">
    If you're horrible to me, I'm going to write a song about it,
    and you won't like it. That's how I operate.
  </button>
  <button data-person="Samuel Jackson">
    Far better is it to dare mighty things, to win glorious triumphs,
    even though checkered by failure... than to rank with those poor spirits who
    neither enjoy nor suffer much, because they live in a gray twilight that
    knows not victory nor defeat.
  </button>

  <div id="gifs-appear-here">
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    // Event listener for all button elements
    $("button").on("click", function() {
      // In this case, the "this" keyword refers to the button that was clicked
      var person = $(this).attr("data-person");

      // Constructing a URL to search Giphy for the name of the person who said the quote
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

      // Performing our AJAX GET request
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data comes back from the API
        .then(function(response) {
          // Storing an array of results in the results variable
          var results = response.data;
          console.log(response);

          // Looping over every result item
          for (var i = 0; i < results.length; i++) {

            // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              // Creating a div for the gif
              var gifDiv = $("<div>");

              // Storing the result item's rating
              var rating = results[i].rating;

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + rating);

              // Creating an image tag
              var personImage = $("<img>");

              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              personImage.attr("src", results[i].images.fixed_height.url);

              // Appending the paragraph and personImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(personImage);

              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              $("#gifs-appear-here").prepend(gifDiv);
            }
          }
        });
    });
  </script>
</body>

</html>-->

<!--<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Favorite Movies</title>
  <style type="text/css">
    button,
    div,
    form,
    input {
      margin: 10px;
    }
  </style>
</head>

<body>

  <div class="container">
    <h1>Movie Search</h1>-->

    <!-- Movies will get dumped here -->
    <!--<div id="movies-view"></div>

    <form id="movie-form">
      <label for="movie-input">Add a Movie, Yo!</label>
      <input type="text" id="movie-input"><br>
    -->
      <!-- Button triggers new movie to be added -->
      <!--<input id="add-movie" type="submit" value="Add a Movie, Yo!">
    </form>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">
      // Initial array of movies
      var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#movies-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("movie");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", movies[i]);
          // Providing the button's text with a value of the movie at index i
          a.text(movies[i]);
          // Adding the button to the HTML
          $("#movies-view").append(a);
        }
      }

      // This function handles events where one button is clicked
      $("#add-movie").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var movie = $("#movie-input").val().trim();
        // The movie from the textbox is then added to our array
        movies.push(movie);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Calling the renderButtons function at least once to display the initial list of movies
      renderButtons();
    </script>
  </div>
</body>

</html>--->




<!--<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>The Magical Cat Button</title>
</head>

<body>
  <button id="cat-button">GHOST COME OUT !</button>
  <div id="images">
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    // Event listener for our cat-button
    $("#cat-button").on("click", function() {

      // Storing our giphy API URL for a random cat image
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=horror";

      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      // After the data from the AJAX request comes back
        .then(function(response) {

        console.log(response);
        // Saving the image_original_url property
          
          var imageUrl = response.data.image_original_url;

          // Creating and storing an image tag
          var catImage = $("<img>");

          // Setting the catImage src attribute to imageUrl
          catImage.attr("src", imageUrl);
          catImage.attr("alt", "cat image");
          catImage.attr("id", "gif");

          // Prepending the catImage to the images div
          $("#images").html(catImage);


          $("#gif").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
        });

        
    });

    
  </script>
</body>

</html>-->
