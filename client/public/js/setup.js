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

gameScreen(1);

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
      console.log("player " + playerNum + ", " + playerName + ", saved!");
  });
}

savePlayer('Emily', 0);
savePlayer('Jim', 1);
savePlayer('Sarah', 2);
savePlayer('Gina', 3);
savePlayer('Greg', 4);

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

saveProfession("banker");

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

saveStartMonth("June");
