window.addEventListener("keydown", checkKeyPressed, false);

var audio = document.getElementById("audio");

function checkKeyPressed(e) {
  if (e.keyCode == "32" && (window.location != 'http://localhost:1337/') &&
  (window.location.href != 'http://localhost:1337/setup') &&
  (window.location.href != 'http://localhost:1337/trail')) {
    sessionStorage.setItem("time", audio.currentTime)
    window.location.href = "/mainmenu";
  }
  if (e.keyCode == "32" && (window.location.href == 'http://localhost:1337/')) {
    // sessionStorage.setItem("time", audio.currentTime)
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
      res = str.replace("On", "Off");
      document.getElementById("sound").innerHTML = res;
      //var time = audio.currentTime;
      sessionStorage.setItem("time", audio.currentTime);
      sessionStorage.setItem("soundString", "Turn Sound Off");
    }
    else if(str == "Turn Sound Off"){
      sessionStorage.setItem("audioOn", "False");
      audio.pause();
      var res = str.replace("Off", "On");
      document.getElementById("sound").innerHTML = res;
      sessionStorage.setItem("time", audio.currentTime);
      sessionStorage.setItem("soundString", "Turn Sound On");
    }
  }
}

if (sessionStorage.getItem("audioOn") == "True" && (window.location.href != 'http://localhost:1337/')) {
  //var audio = document.getElementById("audio");
  audio.currentTime = sessionStorage.getItem("time");
  document.getElementById("sound").innerHTML = sessionStorage.getItem("soundString");
  //var time = audio.currentTime;
  audio.play();
};

//window.onload = soundOn();
