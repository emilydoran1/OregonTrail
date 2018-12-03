function blink_text() {
    $('h3').fadeOut(800);
    $('h3').fadeIn(800)
}

setInterval(blink_text, 1000);

var spacebarToContinue = document.getElementById('spacebarForMenu');
spacebarToContinue.onclick = function(){
  location.href = '/mainmenu';
}
