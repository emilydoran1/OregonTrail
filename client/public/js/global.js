window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.keyCode == "32") {
        window.location.href = "/mainmenu";
    }
}

function soundOn() {
    var str = document.getElementById("sound").innerHTML;
    var audio = document.getElementById("audio");
    if(str == "Turn Sound On"){
      audio.play();
      var res = str.replace("On", "Off");
      document.getElementById("sound").innerHTML = res;
    }
    else if(str == "Turn Sound Off"){
      audio.pause();
      var res = str.replace("Off", "On");
      document.getElementById("sound").innerHTML = res;
    }
}

//window.onload = soundOn();
