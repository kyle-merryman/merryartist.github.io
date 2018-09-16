var vader = {
    hp : 20,
    atk: 120
} 
$("#vader").data(vader);


var senate = {
    hp : 40,
    atk: 70
} 
$("#senate").data(senate);

var obiWan = {
    hp : 25,
    atk: 100
} 
$("#obiWan").data(obiWan);

var jabba = {
    hp : 10,
    atk: 170
} 
$("#jabba").data(jabba);



var playerChoice = {
    hp : 0,
    atk : 0
}

var currentVil = {
    hp : 0,
    atk : 0
}


$("#vader").click(function() {
    if( $('#playerChoice').is(':empty') ) {
        $("#vader").prependTo("#playerChoice");
        $("#charList").prependTo("#villainList");
        playerChoice.hp = vader.hp;
        playerChoice.atk = vader.atk;
        console.log(playerChoice.hp);
        console.log(playerChoice);
    } else if ( $('#currentVil').is(':empty') ) {
        $("#vader").prependTo("#currentVil");
        currentVil.hp = vader.hp;
        currentVil.atk = vader.atk;
        console.log(currentVil.hp);
        console.log(currentVil);
    }
});
$("#senate").click(function() {
    if( $('#playerChoice').is(':empty') ) {
        $("#senate").prependTo("#playerChoice");
        $("#charList").prependTo("#villainList");
        playerChoice.hp = senate.hp;
        playerChoice.atk = senate.atk;
        console.log(playerChoice.hp);
        console.log(playerChoice);
    } else if ( $('#currentVil').is(':empty') ) {
        $("#senate").prependTo("#currentVil");
        currentVil.hp = senate.hp;
        currentVil.atk = senate.atk;
        console.log(currentVil.hp);
        console.log(currentVil);
    }
});
$("#obiWan").click(function() {
    if( $('#playerChoice').is(':empty') ) {
        $("#obiWan").prependTo("#playerChoice");
        $("#charList").prependTo("#villainList");
        playerChoice.hp = obiWan.hp;
        playerChoice.atk = obiWan.atk;
        console.log(playerChoice.hp);
        console.log(playerChoice);
    } else if ( $('#currentVil').is(':empty') ) {
        $("#obiWan").prependTo("#currentVil");
        currentVil.hp = obiWan.hp;
        currentVil.atk = obiWan.atk;
        console.log(currentVil.hp);
        console.log(currentVil);
    }
});
$("#jabba").click(function() {
    if( $('#playerChoice').is(':empty') ) {
        $("#jabba").prependTo("#playerChoice");
        $("#charList").prependTo("#villainList");
        playerChoice.hp = jabba.hp;
        playerChoice.atk = jabba.atk;
        console.log(playerChoice.hp);
        console.log(playerChoice);
    } else if ( $('#currentVil').is(':empty') ) {
        $("#jabba").prependTo("#currentVil");
        currentVil.hp = jabba.hp;
        currentVil.atk = jabba.atk;
        console.log(currentVil.hp);
        console.log(currentVil);
    }
});

//attack button onClick - subtract currentVil.health by playerChoice.power
    //first make sure both player and current villain aren't empty (contains everything else)
$( "#fightBtn" ).click(function() {
    if ($("#playerChoice:not(:empty)") && $("#currentVil:not(:empty)")){
        duel();
        console.log(duel);
    };
    if (currentVil.hp < 1) {
        $('#currentVil div').empty();
        alert("Great job! Select another villain to fight");
    } else if (playerChoice.hp < 1) {
        alert("You lose!")
    } else if ( $('#villainList').is(':empty') ) {
        alert("You win!")
    }


});

//function of player and villain attack - parameters subjective
//then make choosing your player or villain have a line that makes their values = playerChoice and currentVil
    
//vars defined by earlier button clicks
function duel(){
    currentVil.hp = currentVil.hp - playerChoice.atk;
    console.log(currentVil.hp);
    playerChoice.hp = playerChoice.hp - currentVil.atk;
    console.log(playerChoice.hp);
    playerChoice.atk++;
    console.log(playerChoice.atk)
}
//win condition / lose condition


//------------------RESOURCES-TO-REFERENCE--------

//HOW TO BUTTON
/*$('#myButton').on('click', function(event) {
    event.preventDefault(); // To prevent following the link (optional)
    ...
  });*/

//CLICK a DIV to move a DIV into another DIV (i.e. image click moves that image into another box)
/*$( "#target" ).click(function() {
    $("#source").prependTo("#destination");
});*/

//I wanted to increase the per hit attack in a way that was relative to the villain you attack
    //(math.Floor(((playerChoice.hp * 3) / (currentVil.hp * 2) + 2)
    //the above was a 1st draft, it is wildly out of control and unbalanced
    //(math.Floor((playerChoice.atk/40)+5)

//------------------ERROR-TROUBLESHOOTING--------
//objects can't contain jquery data associated with html apparently
    //i.e.     $("#").html(this.hp);
    //ATTEMPT 2: 
        //try just directly referencing playerChoice.atk, currentVil.hp, etc.
        //undefined values

    //ATTEMPT 3: try pushing values to parameters in function, which is called by the button