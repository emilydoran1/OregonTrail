var spacebarForMenu = document.getElementById('spacebarForMenu');
var audio = document.getElementById("audio");

/*spacebarForMenu.onclick = function(){
  sessionStorage.setItem("time", audio.currentTime)
  location.href = '/mainmenu';
}*/

var currentScreen = 0;

function gameScreen(screenNumber){
  if(screenNumber){
    currentScreen = screenNumber;
  }

  var gameContainer = document.getElementById("gameContainer");

  fetch('/api/setup/getScreen/' + currentScreen).then(function(response){
    if(response.status != 200){
      console.log('your request is not good!');
      return;
    }

    response.text().then(function(data){
      //get the returned data add to the dom
      gameContainer.innerHTML = data;
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
    body: '{"playerName": "' + playerName + '"}'

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
    body: '{"start month": "' + month + '"}'

	}).then(function(response) {
      if (response.status !== 200) {
        console.log('your request is not good');
        return;
      }
      console.log("Saved. Your start month is: " + month);
  })
}

//saveStartMonth("June");

//switch between the various setup screens
gameContainer.addEventListener("click", function(e) {
  var targetElement = event.target;
  if(currentScreen == 0) {
    if(targetElement.id == "banker") {
      saveProfession("banker");
      currentScreen++;
      gameScreen(currentScreen);
    }
    if(targetElement.id == "carpenter") {
      saveProfession("carpenter");
      currentScreen++;
      gameScreen(currentScreen);
    }
    if(targetElement.id == "farmer") {
      saveProfession("farmer");
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
      saveStartMonth("march");
      currentScreen++;
      gameScreen(currentScreen);
    }
    if(targetElement.id == "april") {
      saveStartMonth("april");
      currentScreen++;
      gameScreen(currentScreen);
    }
    if(targetElement.id == "may") {
      saveStartMonth("may");
      currentScreen++;
      gameScreen(currentScreen);
    }
    if(targetElement.id == "june") {
      saveStartMonth("june");
      currentScreen++;
      gameScreen(currentScreen);
    }
    if(targetElement.id == "july") {
      saveStartMonth("july");
      currentScreen++;
      gameScreen(currentScreen);
    }
  }

  if(currentScreen == 4) {
    if(targetElement.id == "trail") {
      window.location = "trail";
    }
  }
});
