window.addEventListener("keydown", checkKeyPressed, false);

var audio = document.getElementById("audio");

function checkKeyPressed(e) {
  if (e.keyCode == "32") {
    sessionStorage.setItem("time", audio.currentTime)
    window.location.href = "/mainmenu";
  }
}

function soundOn() {
  if(typeof(Storage) !== "undefined"){
    var str = document.getElementById("sound").innerHTML;
    //var audio = document.getElementById("audio");
    if(str == "Turn Sound On"){
      sessionStorage.setItem("audioOn", "True");
      audio.play();
      var res = str.replace("On", "Off");
      document.getElementById("sound").innerHTML = res;
      //var time = audio.currentTime;
      sessionStorage.setItem("time", audio.currentTime)
    }
    else if(str == "Turn Sound Off"){
      sessionStorage.setItem("audioOn", "False");
      audio.pause();
      var res = str.replace("Off", "On");
      document.getElementById("sound").innerHTML = res;
      sessionStorage.setItem("time", audio.currentTime)
    }
  }
}

if (sessionStorage.getItem("audioOn") == "True") {
  //var audio = document.getElementById("audio");
  audio.currentTime = sessionStorage.getItem("time");
  //var time = audio.currentTime;
  audio.play();
};

//window.onload = soundOn();
