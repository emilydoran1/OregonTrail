var spacebarForMenu = document.getElementById('spacebarForMenu');
var audio = document.getElementById("audio");

spacebarForMenu.onclick = function(){
  sessionStorage.setItem("time", audio.currentTime)
  location.href = '/mainmenu';
}
