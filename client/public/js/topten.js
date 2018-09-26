var spacebarForMenu = document.getElementById('spacebarForMenu');
spacebarForMenu.onclick = function(){
  location.href = '/mainmenu';
}

var topScores = new Array();

//constructor for Score objects
function Score(name, score, date){
  this.name = name;
  this.score = score;
  this.date = date;
}

function addScore(name, score, date){
  var s = new Score(name, score, date);
  topScores.push(s);
}

addScore('Emily', 0, '12/12/18');
addScore('Jack', 10000, '12/12/18');
addScore('Allie', 3, '12/12/18');
addScore('Erin', 70, '12/12/18');
addScore('Nick', 50, '12/12/18');
addScore('Jim', 100, '1/2/2013');
addScore('Tom', 200, '1/19/2016');
addScore('Sarah', 30000, '12/12/18');
addScore('Karl', 7, '12/12/18');
addScore('Kevin', 55, '12/12/18');
addScore('Maria', 1, '1/2/2013');
addScore('Ed', 200, '1/19/2016');

function sort(array){
  var min;
  for (var i = 0; i < array.length; i++){
    max = i;
    for (var j = i+1; j < array.length; j++){
      if (array[j].score > array[max].score){
        max = j;
      }
    }
    if (i != max){
      swap(array, i, max);
    }
  }
}

function swap(array, firstIndex, secondIndex){
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

sort(topScores);

for(var i = 0; i < topScores.length; i++){
  var nameId = 'name' + (i + 1);
  var scoreId = 'score' + (i + 1);
  var dateId = 'date' + (i + 1);
  document.getElementById(nameId).innerHTML = topScores[i].name;
  document.getElementById(scoreId).innerHTML = topScores[i].score;
  document.getElementById(dateId).innerHTML = topScores[i].date;
}
