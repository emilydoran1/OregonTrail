var gameData = require('../models/gameData');
var pace = require('../models/pace');
var terrain = require('../models/terrain');
var weather = require('../models/weather');

var data = gameData.addData();

function setRandomPlayerStatus(){
  if(data.groupHealth >= 20 && data.groupHealth < 50){
    for(var i = 0; i < 5; i++){
      var randNum = Math.floor(Math.random() * 100);
      if(data.playerStatus[i] == true && randNum < 3){
        data.playerStatus[i] = false;
        data.messages.push('Player ' + (i+1) + ' has died.');
      }
    }
  }

  if(data.groupHealth > 0 && data.groupHealth < 20){
    for(var i = 0; i < 5; i++){
      var randNum = Math.floor(Math.random() * 100);
      if(data.playerStatus[i] == true && randNum < 10){
        data.playerStatus[i] = false;
        data.messages.push('Player ' + (i+1) + ' has died.');
      }
    }
  }

  if(data.groupHealth <= 0){
    data.playerStatus = [false,false,false,false,false];
    data.messages.push('All players are dead.');
  }

  return data.playerStatus;
}

function getNumAlive(){
  var count = 0;
  for(var i = 0; i < playerStatus.length; i++){
    if(playerStatus[i] == 'alive'){
      count++;
    }
  }
  return count;
}

exports.nextDay = function(req, res){
  data.daysOnTrail++;
  data.milesTraveled += data.currentPace.miles;
  data.currentWeather = weather.getRandomWeather();
  data.groupHealth += (data.currentPace.healthChange + data.currentWeather.healthChange);
  data.playerStatus = setRandomPlayerStatus();
  data.currentTerrain = terrain.getRandomTerrain();
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
}

exports.reset = function(req, res){
  data.daysOnTrail = 0;
  data.milesTraveled = 0;
  data.groupHealth = 100;
  data.playerStatus = [true, true, true, true, true];
  data.messages = [];
  res.setHeader('Content-Type', 'application/json');
	res.send(data);
}

exports.setPace = function(req, res){
  var newPace = pace.allPaces[req.params.id];
  res.setHeader('Content-Type', 'application/json');
	res.send(newPace);
}
