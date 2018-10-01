window.addEventListener("keydown", checkKeyPressed, false);
var audio = document.getElementById("audio");

function checkKeyPressed(e) {
    if (e.keyCode == "49") {
      sessionStorage.setItem("time", audio.currentTime)
      window.location.href = "/setup";
    }
    else if (e.keyCode == "51") {
      sessionStorage.setItem("time", audio.currentTime)
      window.location.href = "/topten";
    }
    else if(e.keyCode == "52"){
      soundOn();
    }
}

var travelTrail = document.getElementById('travelTrail');
travelTrail.onclick = function(){
  sessionStorage.setItem("time", audio.currentTime)
  location.href = '/setup';
}

var topTen = document.getElementById('topTen');
topTen.onclick = function(){
  sessionStorage.setItem("time", audio.currentTime)
  location.href = '/topten';
}

var sound = document.getElementById('sound');
sound.onclick = function(){
  soundOn();
}
