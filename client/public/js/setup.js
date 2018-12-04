var spacebarForMenu = document.getElementById('trail');
var audio = document.getElementById("audio");

var currentScreen = 0;

//calls the getScreen method from setup controller to get the proper screen
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

//calls the first screen
gameScreen(currentScreen);

//calls the savePlayerName method from the setup controller to save each players name
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

//calls the saveProfession method from the setup controller to save the profession
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

//calls the saveStartMonth method from the setup controller to save the month
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

//calls the saveMoney method from the setup controller to save the money
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

//calls the getGameData() method from game controller to return the data
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

//sets all of the data for the last setup screen
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

//checks what key is pressed
window.addEventListener("keydown", keyPressed, false);

function keyPressed(e) {
  //FIRST SCREEN
  if(currentScreen == 0) {
    //player presses 1 to save profession as banker
    if(e.keyCode == "49"){
      saveProfession('banker');
      //saves proper banker money
      saveMoney('2000');
      currentScreen++;
      gameScreen(currentScreen);
    }
    //player presses 2 to save profession as carpenter
    else if(e.keyCode == "50"){
      saveProfession('carpenter');
      //saves proper capenter money
      saveMoney('1800');
      currentScreen++;
      gameScreen(currentScreen);
    }
    //player presses 3 to save profession as farmer
    else if(e.keyCode == "51"){
      saveProfession('farmer');
      //saves proper farmer money
      saveMoney('1500');
      currentScreen++;
      gameScreen(currentScreen);
    }
  }

  //FOURTH SCREEN
  else if(currentScreen == 3) {
    //player presses 1 to save month as March
    if(e.keyCode == "49"){
      saveStartMonth('March');
      currentScreen++;
      gameScreen(currentScreen);
    }
    //player presses 2 to save month as Aprik
    else if(e.keyCode == "50"){
      saveStartMonth('April');
      currentScreen++;
      gameScreen(currentScreen);
    }
    //player presses 3 to save month as May
    else if(e.keyCode == "51"){
      saveStartMonth('May');
      currentScreen++;
      gameScreen(currentScreen);
    }
    //player presses 4 to save month as June
    else if(e.keyCode == "52"){
      saveStartMonth('June');
      currentScreen++;
      gameScreen(currentScreen);
    }
    //player presses 5 to save month as July
    else if(e.keyCode == "53"){
      saveStartMonth('July');
      currentScreen++;
      gameScreen(currentScreen);
    }
  }

  //FIFTH (LAST) SCREEN
  //if ENTER is pressed, go to trail page
  else if(currentScreen == 4){
    if(e.keyCode == "32"){
      window.location = 'trail';
    }
  }
}

//checks for click on elements
gameContainer.addEventListener("click", function(e) {
  var targetElement = event.target || event.srcElement;
  //FIRST SCREEN
  if(currentScreen == 0) {
    //if banker is clicked set profession to banker
    if(targetElement.id == "banker") {
      saveProfession("Banker");
      //set proper money for banker
      saveMoney("2000");
      currentScreen++;
      gameScreen(currentScreen);
    }
    //if carpenter is clicked set profession to carpenter
    if(targetElement.id == "carpenter") {
      saveProfession("Carpenter");
      //set proper money for carpenter
      saveMoney("1800");
      currentScreen++;
      gameScreen(currentScreen);
    }
    //if farmer is clicked set profession to farmer
    if(targetElement.id == "farmer") {
      saveProfession("Farmer");
      //set proper money for farmer
      saveMoney("1500");
      currentScreen++;
      gameScreen(currentScreen);
    }
  }

  // SECOND SCREEN
  if(currentScreen == 1) {
    //if button is clicked
    if(targetElement.id == "page2") {
      var user1 = document.getElementById('player1').value;
      //saves the leader
      savePlayer(user1, 0);
      currentScreen++;
      gameScreen(currentScreen);
    }
  }

  //THIRD SCREEN
  if(currentScreen == 2) {
    //if button is clicked
    if(targetElement.id == "page3") {
      var user2 = document.getElementById('player2').value;
      var user3 = document.getElementById('player3').value;
      var user4 = document.getElementById('player4').value;
      var user5 = document.getElementById('player5').value;

      //save all the rest of the players
      savePlayer(user2, 1);
      savePlayer(user3, 2);
      savePlayer(user4, 3);
      savePlayer(user5, 4);
      currentScreen++;
      gameScreen(currentScreen);
    }
  }

  //FOURTH SCREEN
  if(currentScreen == 3) {
    //if march is clicked, save month as march
    if(targetElement.id == "march") {
      saveStartMonth("March");
      currentScreen++;
      gameScreen(currentScreen);
    }
    //if april is clicked, save month as april
    if(targetElement.id == "april") {
      saveStartMonth("April");
      currentScreen++;
      gameScreen(currentScreen);
    }
    //if may is clicked, save month as may
    if(targetElement.id == "may") {
      saveStartMonth("May");
      currentScreen++;
      gameScreen(currentScreen);
    }
    //if june is clicked, save month as june
    if(targetElement.id == "june") {
      saveStartMonth("June");
      currentScreen++;
      gameScreen(currentScreen);
    }
    //if july is clicked, save month as july
    if(targetElement.id == "july") {
      saveStartMonth("July");
      currentScreen++;
      gameScreen(currentScreen);
    }
  }

  //FIFTH (FINAL) SCREEN
  if(currentScreen == 4) {
    //if text is clicked, go to trail page
    if(targetElement.id == "trail") {
      sessionStorage.setItem("time", audio.currentTime)
      window.location = "trail";
    }
  }
});
