//var spacebarForMenu = document.getElementById('spacebarForMenu');
//spacebarForMenu.onclick = function(){
  //location.href = '/mainmenu';
//}

var days;

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

var miles = 0;
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
  if (e.keyCode == 13){
    if(numAlive === 0){
      resetGame();
    }
    else if(days > 39){
      resetGame();
    }
    else if(miles >= 500){
      resetGame();
    }
    else if(messageBoxOpen == true){
      messageBoxOpen = false;
  		messageBox.style.display = 'none';
      nextDay();
    }
    else{
      nextDay();
    }
  }
  if (e.keyCode == 32){
    changePace();
  }
  if(paceBoxOpen == true){
    if (e.keyCode == 49){
      setPace('0');
      paceBoxOpen = false;
      paceBox.style.display='none';
    }
    if (e.keyCode == 50){
      setPace('1');
      paceBoxOpen = false;
      paceBox.style.display='none';
    }
    if (e.keyCode == 51){
      setPace('2');
      paceBoxOpen = false;
      paceBox.style.display='none';
    }
    if (e.keyCode == 52){
      setPace('3');
      paceBoxOpen = false;
      paceBox.style.display='none';
    }
  }
});

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

var paceBox = document.getElementById('choosePace');
var paceBoxOpen = false;
paceBox.style.display = 'none';

function changePace() {
	paceBox.style.display = 'block';
  paceBoxOpen = true;
}
// changePace();

document.addEventListener("click", function(e) {
  var targetElement = event.target || event.srcElement;

  if(paceBoxOpen == true) {
    if(targetElement.id == "steady") {
		   setPace("0");
	     paceBoxOpen = false;
		   paceBox.style.display='none';
		}
		else if (targetElement.id == "strenuous") {
		   setPace("1");
		   paceBoxOpen = false;
		   paceBox.style.display='none';
		}
		else if (targetElement.id == "grueling") {
		   setPace("2");
		   paceBoxOpen = false;
		   paceBox.style.display='none';
		}
		else if (targetElement.id == "resting") {
		   setPace("3");
			 paceBoxOpen = false;
			 paceBox.style.display='none';
		}
	}
});

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
      nextDay();
      return data;
    });
  });
}

var messageBox = document.getElementById('messages');
var messageBoxOpen = false;
var messages = 0;
messageBox.style.display = 'none';


function updateSettings(data) {
	messageBox.innerHTML = "";
	messageBoxOpen = false;
	messageBox.style.display = 'none';
  // console.log(messages);

	if (data.messages.length > messages) {
		//alert(gameData.messages);
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

  numAlive = 0;

	for(var i = 0; i < data.playerStatus.length; i++) {
		if (data.playerStatus[i] == true) {
			numAlive++;
		}
	}

  if(numAlive == 0){
    messageBox.style.display = 'block';
    messageBoxOpen = true;
    messageBox.innerHTML = 'All Players have Died. GAME OVER. Press ENTER to Play Again';
  }

  if(data.daysOnTrail > 40){
    days = data.daysOnTrail;
    messageBox.style.display = 'block';
    messageBoxOpen = true;
    messageBox.innerHTML = 'Days on Trail has exceeded 40. GAME OVER. Press ENTER to Play Again';
  }

	document.getElementById('daysOnTrail').innerHTML = data.daysOnTrail;
	document.getElementById('milesTraveled').innerHTML = data.milesTraveled;
	document.getElementById('currentWeather').innerHTML = data.currentWeather.type;
	document.getElementById('currentHealth').innerHTML = data.groupHealth;
	document.getElementById('currentPace').innerHTML = data.currentPace.paceName;
	document.getElementById('currentTerrain').innerHTML = data.currentTerrain.terrainName;
  document.getElementById('partyMembers').innerHTML = numAlive;

  if(data.currentTerrain.terrainName == 'Desert'){
    //console.log('Desert');
    document.getElementById('terrainContain').style.backgroundImage = "url('/images/desert.jpg')";
  }
  else if(data.currentTerrain.terrainName == 'Mountains'){
    document.getElementById('terrainContain').style.backgroundImage = "url('/images/mountains.jpg')";
  }
  else if(data.currentTerrain.terrainName == 'Forest'){
    document.getElementById('terrainContain').style.backgroundImage = "url('/images/forest.jpg')";
  }
  else if(data.currentTerrain.terrainName == 'Plains'){
    document.getElementById('terrainContain').style.backgroundImage = "url('/images/plains.jpg')";
  }

  var areaTraveled = (data.milesTraveled * 1.1) - 30;
  document.getElementById('hiker').style.left = areaTraveled + "px";
}

function sendTopScore(playerName, score) {
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

resetGame();
