window.addEventListener("keydown", checkKeyPressed, false);

// function soundOn() {
//     var str = document.getElementById("sound").innerHTML;
//     var audio = document.getElementById("audio");
//     if(str == "Turn Sound On"){
//       audio.play();
//       var res = str.replace("On", "Off");
//       document.getElementById("sound").innerHTML = res;
//     }
//     else if(str == "Turn Sound Off"){
//       audio.pause();
//       var res = str.replace("Off", "On");
//       document.getElementById("sound").innerHTML = res;
//     }
//     else{
//       audio.play();
//     }
// }

function checkKeyPressed(e) {
    if (e.keyCode == "49") {
        window.location.href = "/setup";
    }
    else if (e.keyCode == "51") {
        window.location.href = "/topten";
    }
    else if(e.keyCode == "52"){
      soundOn();
    }
}

var travelTrail = document.getElementById('travelTrail');
travelTrail.onclick = function(){
  location.href = '/setup';
}

var topTen = document.getElementById('topTen');
topTen.onclick = function(){
  location.href = '/topten';
}

var sound = document.getElementById('sound');
sound.onclick = function(){
  soundOn();
}
