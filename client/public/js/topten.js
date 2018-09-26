var spacebarForMenu = document.getElementById('spacebarForMenu');
spacebarForMenu.onclick = function(){
  location.href = '/mainmenu';
}

var topScores = new Array();

function AddScore(name, score, date){
  topScores.push(name, score, date);
}

AddScore('Emily', 50, '12/12/18');
alert(topScores);
