var spacebarForMenu = document.getElementById('spacebarForMenu');
var audio = document.getElementById("audio");

spacebarForMenu.onclick = function(){
  sessionStorage.setItem("time", audio.currentTime)
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

addScore('Emily', 3500, '01/7/13');
addScore('Jack', 10000, '02/14/18');
addScore('Allie', 3, '06/22/17');
addScore('Erin', 70, '10/1/18');
addScore('Nick', 50, '05/14/17');
addScore('Jim', 100, '01/2/2013');
addScore('Tom', 200, '01/19/2016');
addScore('Sarah', 0, '10/8/14');
addScore('Karl', 7, '09/12/18');
addScore('Kevin', 55, '07/31/16');
addScore('Maria', 1, '01/2/2013');
addScore('Ed', 200, '01/19/2016');

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

printTopTen(topScores);

function printTopTen(array){
  if(array.length > 10){
    for(var i = 0; i < 10; i++){
      var nameId = 'name' + (i + 1);
      var scoreId = 'score' + (i + 1);
      var dateId = 'date' + (i + 1);
      document.getElementById(nameId).innerHTML = array[i].name;
      document.getElementById(scoreId).innerHTML = array[i].score;
      document.getElementById(dateId).innerHTML = array[i].date;
    }
  }
  else{
    for(var i = 0; i < array.length; i++){
      var nameId = 'name' + (i + 1);
      var scoreId = 'score' + (i + 1);
      var dateId = 'date' + (i + 1);
      document.getElementById(nameId).innerHTML = array[i].name;
      document.getElementById(scoreId).innerHTML = array[i].score;
      document.getElementById(dateId).innerHTML = array[i].date;
    }
  }
}
