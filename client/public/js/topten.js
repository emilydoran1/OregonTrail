var spacebarForMenu = document.getElementById('spacebarForMenu');
var audio = document.getElementById("audio");

spacebarForMenu.onclick = function(){
  sessionStorage.setItem("time", audio.currentTime)
  location.href = '/mainmenu';
}

//var topScores = new Array();

//constructor for Score objects
function Score(name, score, date){
  this.name = name;
  this.score = score;
  this.date = date;
}

getTopTen();

//calls the get top ten method from topten controller to retreive the scores
function getTopTen(){
  fetch('/api/topTen/topTen').then(function(response) {
    if (response.status !== 200) {
      console.log('your request is not good.');
    }
    response.text().then(function(data) {
		  // console.log("here is the data: " + data);
      //calls method to print the scores
      printTopTen(data);
    })
  });
}

/*function addScore(name, score, date){
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
*/

//sorts the top ten
function sort(array){
  var min;
  for (var i = 0; i < array.length; i++){
    max = i;
    for (var j = i+1; j < array.length; j++){
      if (array[j].playerScore > array[max].playerScore){
        max = j;
      }
    }
    if (i != max){
      swap(array, i, max);
    }
  }
  return array;
}

//part of sorting method
function swap(array, firstIndex, secondIndex){
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//sort(topScores);

//printTopTen(topScores);

//function to print the top scores
function printTopTen(array){
  var jsonData = JSON.parse(array);
  var topScores = [];

  for(var x in jsonData){
		topScores.push(jsonData[x]);
	}

//calls sort
  sort(topScores);

  if(topScores.length > 10){
    for(var i = 0; i < 10; i++){
      var currentScore = topScores[i];

      var nameId = 'name' + (i + 1);
      var scoreId = 'score' + (i + 1);
      var dateId = 'date' + (i + 1);
      document.getElementById(nameId).innerHTML = currentScore.playerName;
      document.getElementById(scoreId).innerHTML = currentScore.playerScore;
      document.getElementById(dateId).innerHTML = currentScore.playerDate;
    }
  }
  else{
    for(var i = 0; i < topScores.length; i++){
      var currentScore = topScores[i];

      var nameId = 'name' + (i + 1);
      var scoreId = 'score' + (i + 1);
      var dateId = 'date' + (i + 1);
      document.getElementById(nameId).innerHTML = currentScore.playerName;
      document.getElementById(scoreId).innerHTML = currentScore.playerScore;
      document.getElementById(dateId).innerHTML = currentScore.playerDate;
    }
  }
}
