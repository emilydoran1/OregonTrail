var spacebarForMenu = document.getElementById('trail');
var audio = document.getElementById("audio");

var currentScreen = 0;

function gameScreen(screenNumber){
  var gameContainer = document.getElementById("gameContainer");

  fetch('/api/setup/getScreen/' + currentScreen).then(function(response){
    if(response.status != 200){
      console.log('your request is not good!');
      return;
    }

    response.text().then(function(data){
      gameContainer.innerHTML = data;
      if(currentScreen == 4){
      showSettings();
    }
    })
  });
}

gameScreen(currentScreen);

function savePlayer(playerName, playerNum){
  fetch('/api/setup/savePlayerName/' + playerNum,
  {
    method:'post',
    headers: {
      "Content-type": "application/json"
    },
    body: '{"name": "' + playerName + '"}'

	}).then(function(response) {
      if (response.status !== 200) {
        console.log('your request is not good');
        return;
      }
      console.log("player " + (playerNum+1) + ", " + playerName + ", saved!");
  });
}

//savePlayer('Emily', 0);
//savePlayer('Jim', 1);
//savePlayer('Sarah', 2);
//savePlayer('Gina', 3);
//savePlayer('Greg', 4);

function saveProfession(profession){
  fetch('/api/setup/saveProfession',
  {
    method:'post',
    headers: {
      "Content-type": "application/json"
    },
    body: '{"profession": "' + profession + '"}'

	}).then(function(response) {
      if (response.status !== 200) {
        console.log('your request is not good');
        return;
      }
      console.log("Saved. Your Profession is: " + profession);
  });
}

//saveProfession("banker");

function saveStartMonth(month){
  fetch('/api/setup/saveStartMonth',
  {
    method:'post',
    headers: {
      "Content-type": "application/json"
    },
    body: '{"month": "' + month + '"}'

	}).then(function(response) {
      if (response.status !== 200) {
        console.log('your request is not good');
        return;
      }
      console.log("Saved. Your start month is: " + month);
  })
}

//saveStartMonth("June");

var money = 0;

function saveMoney(money){
  fetch('/api/setup/saveMoney',
  {
    method:'post',
    headers: {
      "Content-type": "application/json"
    },
    body: '{"money": "' + money + '"}'

	}).then(function(response) {
      if (response.status !== 200) {
        console.log('your request is not good');
        return;
      }
      console.log("Saved. Your start money is: " + money);
  })
}

function showSettings() {
  fetch('/api/game/getData').then(function(response) {
    if (response.status !== 200) {
      console.log('your request is not good');
      return;
    }
    response.json().then(function(data) {
      updateGameSettings(data);
      return data;
    });
  });
}

function updateGameSettings(settings) {
    if(currentScreen == 4) {
		document.getElementById('p1Name').innerHTML = settings.playerNames[0];
		document.getElementById('p2Name').innerHTML = settings.playerNames[1];
		document.getElementById('p3Name').innerHTML = settings.playerNames[2];
		document.getElementById('p4Name').innerHTML = settings.playerNames[3];
		document.getElementById('p5Name').innerHTML = settings.playerNames[4];
    document.getElementById('pProfession').innerHTML = settings.playerProfession;
		document.getElementById('pMoney').innerHTML = settings.playerMoney;
		document.getElementById('pMonth').innerHTML = settings.startMonth;
    }
}

window.addEventListener("keydown", keyPressed, false);
function keyPressed(e) {
  if(currentScreen == 0) {
    if(e.keyCode == "49"){
      saveProfession('banker');
      saveMoney('2000');
      currentScreen++;
      gameScreen(currentScreen);
    }
    else if(e.keyCode == "50"){
      saveProfession('carpenter');
      saveMoney('1800');
      currentScreen++;
      gameScreen(currentScreen);
    }
    else if(e.keyCode == "51"){
      saveProfession('farmer');
      saveMoney('1500');
      currentScreen++;
      gameScreen(currentScreen);
    }
  }

  else if(currentScreen == 3) {
    if(e.keyCode == "49"){
      saveStartMonth('March');
      currentScreen++;
      gameScreen(currentScreen);
    }
    else if(e.keyCode == "50"){
      saveStartMonth('April');
      currentScreen++;
      gameScreen(currentScreen);
    }
    else if(e.keyCode == "51"){
      saveStartMonth('May');
      currentScreen++;
      gameScreen(currentScreen);
    }
    else if(e.keyCode == "52"){
      saveStartMonth('June');
      currentScreen++;
      gameScreen(currentScreen);
    }
    else if(e.keyCode == "53"){
      saveStartMonth('July');
      currentScreen++;
      gameScreen(currentScreen);
    }
  }

  else if(currentScreen == 4){
    if(e.keyCode == "32"){
      window.location = 'trail';
    }
  }
}


//switch between the various setup screens
gameContainer.addEventListener("click", function(e) {
  var targetElement = event.target || event.srcElement;
  if(currentScreen == 0) {
    if(targetElement.id == "banker") {
      saveProfession("Banker");
      saveMoney("2000");
      currentScreen++;
      gameScreen(currentScreen);
    }
    if(targetElement.id == "carpenter") {
      saveProfession("Carpenter");
      saveMoney("1800");
      currentScreen++;
      gameScreen(currentScreen);
    }
    if(targetElement.id == "farmer") {
      saveProfession("Farmer");
      saveMoney("1500");
      currentScreen++;
      gameScreen(currentScreen);
    }
  }

  if(currentScreen == 1) {
    if(targetElement.id == "page2") {
      var user1 = document.getElementById('player1').value;
      savePlayer(user1, 0);
      currentScreen++;
      gameScreen(currentScreen);
    }
  }

  if(currentScreen == 2) {
    if(targetElement.id == "page3") {
      var user2 = document.getElementById('player2').value;
      var user3 = document.getElementById('player3').value;
      var user4 = document.getElementById('player4').value;
      var user5 = document.getElementById('player5').value;

      savePlayer(user2, 1);
      savePlayer(user3, 2);
      savePlayer(user4, 3);
      savePlayer(user5, 4);
      currentScreen++;
      gameScreen(currentScreen);
    }
  }

  if(currentScreen == 3) {
    if(targetElement.id == "march") {
      saveStartMonth("March");
      currentScreen++;
      gameScreen(currentScreen);
    }
    if(targetElement.id == "april") {
      saveStartMonth("April");
      currentScreen++;
      gameScreen(currentScreen);
    }
    if(targetElement.id == "may") {
      saveStartMonth("May");
      currentScreen++;
      gameScreen(currentScreen);
    }
    if(targetElement.id == "june") {
      saveStartMonth("June");
      currentScreen++;
      gameScreen(currentScreen);
    }
    if(targetElement.id == "july") {
      saveStartMonth("July");
      currentScreen++;
      gameScreen(currentScreen);
    }
  }

  if(currentScreen == 4) {
    if(targetElement.id == "trail") {
      sessionStorage.setItem("time", audio.currentTime)
      window.location = "trail";
    }
  }
});
