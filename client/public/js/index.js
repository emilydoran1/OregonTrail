function blink_text() {
    // $('.subtitle').fadeOut(800);
    // $('.subtitle').fadeIn(800);
    $('h3').fadeOut(800);
    $('h3').fadeIn(800)
}

setInterval(blink_text, 1000);

var spacebarToContinue = document.getElementById('spacebarToContinue');
spacebarToContinue.onclick = function(){
  location.href = '/mainmenu';
}
