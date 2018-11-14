var currentScreen = 0;

var spacebarForMenu = document.getElementById('spacebarForMenu');
var audio = document.getElementById("audio");

/*spacebarForMenu.onclick = function(){
  sessionStorage.setItem("time", audio.currentTime)
  location.href = '/mainmenu';
}*/

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
  })
}

gameScreen(4);
