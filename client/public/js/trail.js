//var spacebarForMenu = document.getElementById('spacebarForMenu');
//spacebarForMenu.onclick = function(){
  //location.href = '/mainmenu';
//}

//keeps track of the days on the trail
var days;

//calls the gameController method nextDay()
function nextDay() {
  fetch('/api/game/nextDay').then(function(response) {
    if (response.status !== 200) {
      console.log('your request is not good');
      return;
    }
    response.json().then(function(data) {
      checkDaysTraveled(data);
      updateSettings(data);
      return data;
    });
  });
}

//keeps track of the miles traveled
var miles = 0;
//function that checks if the miles traveled >= 500
//if so, the player wins the game and their score is sent to topten
function checkDaysTraveled(data){
  if(data.milesTraveled >= 500 && data.groupHealth >= 0){
    miles = data.milesTraveled;
    sendTopScore(data.playerNames[0], (data.groupHealth * (data.daysOnTrail) * 100));
    //paceBoxOpen = true;
    data.messages.push('You Won!!');
    //resetGame();
  }
}


window.addEventListener("keydown", function(e) {
  //ENTER is pressed
  if (e.keyCode == 13){
    //if all players die
    if(numAlive === 0){
      resetGame();
    }
    //if days on the trail exceeds max of 40
    else if(days > 39){
      resetGame();
    }
    //if the player wins
    else if(miles >= 500){
      resetGame();
    }
    //none of above is true, so just calls nextDay() and closes the message box
    else if(messageBoxOpen == true){
      messageBoxOpen = false;
  		messageBox.style.display = 'none';
      nextDay();
    }
    //just calls nextDay() if none above is true and message box is not open
    else{
      nextDay();
    }
  }
  //SPACEBAR is pressed
  if (e.keyCode == 32){
    changePace();
  }
  //Pace option box is open
  if(paceBoxOpen == true){
    //player presses 1, so sets pace to steady and closes box
    if (e.keyCode == 49){
      setPace('0');
      paceBoxOpen = false;
      paceBox.style.display='none';
    }
    //player presses 2, so sets pace to strenuous and closes box
    if (e.keyCode == 50){
      setPace('1');
      paceBoxOpen = false;
      paceBox.style.display='none';
    }
    //player presses 3, so sets pace to grueling and closes box
    if (e.keyCode == 51){
      setPace('2');
      paceBoxOpen = false;
      paceBox.style.display='none';
    }
    //player presses 4, so sets pace to resting and closes box
    if (e.keyCode == 52){
      setPace('3');
      paceBoxOpen = false;
      paceBox.style.display='none';
    }
  }
});

//calls the resetGame() method in gameController
function resetGame() {
  fetch('/api/game/reset').then(function(response) {
    if (response.status !== 200) {
      console.log('your request is not good.');
    }
    else{
      response.json().then(function(data) {
  			console.log("game reset!");
        messages = 0;
        days = 0;
        miles = 0;
        updateSettings(data);
        return data;
      });
    }
  });
}

//gets the pace box from html
var paceBox = document.getElementById('choosePace');
var paceBoxOpen = false;
paceBox.style.display = 'none';

//opens the pace box
function changePace() {
	paceBox.style.display = 'block';
  paceBoxOpen = true;
}
// changePace();

document.addEventListener("click", function(e) {
  var targetElement = event.target || event.srcElement;

  //if player clicks on steady, sets pace to steady and closes box
  if(paceBoxOpen == true) {
    if(targetElement.id == "steady") {
		   setPace("0");
	     paceBoxOpen = false;
		   paceBox.style.display='none';
		}
    //if player clicks on strenuous, sets pace to strenuous and closes box
		else if (targetElement.id == "strenuous") {
		   setPace("1");
		   paceBoxOpen = false;
		   paceBox.style.display='none';
		}
    //if player clicks on grueling, sets pace to grueling and closes box
		else if (targetElement.id == "grueling") {
		   setPace("2");
		   paceBoxOpen = false;
		   paceBox.style.display='none';
		}
    //if player clicks on resting, sets pace to resting and closes box.
		else if (targetElement.id == "resting") {
		   setPace("3");
			 paceBoxOpen = false;
			 paceBox.style.display='none';
		}
	}
});

//calls the setPace() method from gameController
function setPace(pace){
  fetch('/api/game/setPace/' + pace,
		{method: "post",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		})
	.then(function(response) {
    if (response.status !== 200) {
      console.log('your request is not good.');
      return;
    }
    response.json().then(function(data) {
      //after it changes the pace, it calls the nextDay()
      nextDay();
      return data;
    });
  });
}

//gets the message popup box from html
var messageBox = document.getElementById('messages');
var messageBoxOpen = false;
var messages = 0;
messageBox.style.display = 'none';


//updates all of the game information
function updateSettings(data) {
  //sets the default for the message box to closed
	messageBox.innerHTML = "";
	messageBoxOpen = false;
	messageBox.style.display = 'none';
  // console.log(messages);

//checks to see if there are any new messages
  if (data.messages.length > messages) {
    //opens the message box and displays the messages
    messages = data.messages.length;
		messageBox.style.display = 'block';
		messageBoxOpen = true;
		for (var i=0; i< data.messages.length; i++) {
      messageBox.innerHTML += data.messages[i];
		}
    messageBox.innerHTML += 'Press ENTER to Continue';
	}

  else{
    messageBox.innerHTML = "";
    messageBoxOpen = false;
    messageBox.style.display = 'none';
  }

  //keeps track of the number of players that are still alive
  numAlive = 0;

  //goes through the playerStatus array and increments numAlive for each alive player
  for(var i = 0; i < data.playerStatus.length; i++) {
		if (data.playerStatus[i] == true) {
			numAlive++;
		}
	}

  //checks if all players are dead, and if so prints a message
  if(numAlive == 0){
    messageBox.style.display = 'block';
    messageBoxOpen = true;
    messageBox.innerHTML = 'All Players have Died. GAME OVER. Press ENTER to Play Again';
  }

  //checks if the days on the trail has exceeded 40 and displays message
  if(data.daysOnTrail > 40){
    days = data.daysOnTrail;
    messageBox.style.display = 'block';
    messageBoxOpen = true;
    messageBox.innerHTML = 'Days on Trail has exceeded 40. GAME OVER. Press ENTER to Play Again';
  }

  //sets innerHTML of all data showing on the screen
  document.getElementById('daysOnTrail').innerHTML = data.daysOnTrail;
	document.getElementById('milesTraveled').innerHTML = data.milesTraveled;
	document.getElementById('currentWeather').innerHTML = data.currentWeather.type;
	document.getElementById('currentHealth').innerHTML = data.groupHealth;
	document.getElementById('currentPace').innerHTML = data.currentPace.paceName;
	document.getElementById('currentTerrain').innerHTML = data.currentTerrain.terrainName;
  document.getElementById('partyMembers').innerHTML = numAlive;

  //checks if the terrain is desert and if so displays the desert image
  if(data.currentTerrain.terrainName == 'Desert'){
    //console.log('Desert');
    document.getElementById('terrainContain').style.backgroundImage = "url('/images/desert.jpg')";
  }
  //checks if the terrain is mountains and if so displays the mountains image
  else if(data.currentTerrain.terrainName == 'Mountains'){
    document.getElementById('terrainContain').style.backgroundImage = "url('/images/mountains.jpg')";
  }
  //checks if the terrain is forest and if so displays the forest image
  else if(data.currentTerrain.terrainName == 'Forest'){
    document.getElementById('terrainContain').style.backgroundImage = "url('/images/forest.jpg')";
  }
  //checks if the terrain is plains and if so displays the plains image
  else if(data.currentTerrain.terrainName == 'Plains'){
    document.getElementById('terrainContain').style.backgroundImage = "url('/images/plains.jpg')";
  }

  //computes the distance the hiker should move across the screen
  var areaTraveled = (data.milesTraveled * 1.1) - 30;
  document.getElementById('hiker').style.left = areaTraveled + "px";
}

//adds a score to the oregon top ten page
function sendTopScore(playerName, score) {
  //creates a date for today
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is month 0
  var yyyy = today.getFullYear();
  if(dd<10) {
      dd = '0' + dd;
  }
  if(mm<10) {
      mm = '0' + mm;
  }
  today = yyyy + '/' + mm + '/' + dd;

  //fetches the save score method from the topten controller
  fetch('/api/topTen/saveScore',
	 {
     method: "post",
		 headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json'
	  },
	  body: '{"playerName": "' + playerName + '", "playerScore": "' + score + '", "dateEarned": "' + today +'"}'
	})
	.then(function(response) {
    if (response.status !== 200) {
      console.log('your request is not good.');
      return;
    }
    response.json().then(function(data) {
			console.log("Score sent!");
      return data;
    });
  });
}

//default action is to reset game
resetGame();
