var gameData = require('../models/gameData');
var pace = require('../models/pace');
var terrain = require('../models/terrain');
var weather = require('../models/weather');

data = gameData.addData();

//determines if a player or players die based on the group health and the random probability
function setRandomPlayerStatus(req, res){
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

  if(data.groupHealth <= 0 || data.playerStatus == [false,false,false,false,false]){
    data.playerStatus = [false,false,false,false,false];
    data.messages.push('All players are dead. Game Over.');
    //exports.reset(req, res);
  }

  return data.playerStatus;
}

//returns the number of alive players
function getNumAlive(){
  var count = 0;
  for(var i = 0; i < playerStatus.length; i++){
    if(playerStatus[i] == true){
      count++;
    }
  }
  return count;
}


//travels 1 day and increments all of the data
exports.nextDay = function(req, res){
  data.daysOnTrail++;
  data.milesTraveled += (data.currentPace.miles * data.currentWeather.mileChange);
  data.groupHealth += (data.currentPace.healthChange + data.currentWeather.healthChange);
  data.playerStatus = setRandomPlayerStatus(req, res);
  data.currentWeather = weather.getRandomWeather();

  //calls the get random terrain for very hot weather
  if(data.currentWeather.type == 'Very Hot'){
    data.currentTerrain = terrain.getVeryHotTerrain();
  }
  //calls the get random terrain for hot weather
  else if(data.currentWeather.type == 'Hot'){
    data.currentTerrain = terrain.getHotTerrain();
  }
  //calls the get random terrain for warm weather
  else if(data.currentWeather.type == 'Warm'){
    data.currentTerrain = terrain.getWarmTerrain();
  }
  //calls the get random terrain for cool weather
  else if(data.currentWeather.type == 'Cool'){
    data.currentTerrain = terrain.getCoolTerrain();
  }
  //calls the get random terrain for cold weather
  else if(data.currentWeather.type == 'Cold'){
    data.currentTerrain = terrain.getColdTerrain();
  }
  //calls the get random terrain for very cold weather
  else if(data.currentWeather.type == 'Very Cold'){
    data.currentTerrain = terrain.getVeryColdTerrain();
  }
  //calls the get random terrain for rainy weather
  else if(data.currentWeather.type == 'Rain'){
    data.currentTerrain = terrain.getRainTerrain();
  }
  //calls the get random terrain for heavy rain weather
  else if(data.currentWeather.type == 'Heavy Rain'){
    data.currentTerrain = terrain.getHeavyRainTerrain();
  }
  //calls the get random terrain for snowy weather
  else if(data.currentWeather.type == 'Snow'){
    data.currentTerrain = terrain.getSnowTerrain();
  }
  //calls the get random terrain for blizzard weather
  else if(data.currentWeather.type == 'Blizzard'){
    data.currentTerrain = terrain.getBlizzardTerrain();
  }
  //calls the get random terrain for heavy fog weather
  else if(data.currentWeather.type == 'Heavy Fog'){
    data.currentTerrain = terrain.getHeavyFogTerrain();
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(data);
}

//resets all data back to starting
exports.reset = function(req, res){
  data.daysOnTrail = 0;
  data.milesTraveled = 0;
  data.groupHealth = 100;
  data.playerStatus = [true, true, true, true, true];
  data.currentWeather = weather.getRandomWeather();
  if(data.currentWeather.type == 'Very Hot'){
    data.currentTerrain = terrain.getVeryHotTerrain();
  }
  else if(data.currentWeather.type == 'Hot'){
    data.currentTerrain = terrain.getHotTerrain();
  }
  else if(data.currentWeather.type == 'Warm'){
    data.currentTerrain = terrain.getWarmTerrain();
  }
  else if(data.currentWeather.type == 'Cool'){
    data.currentTerrain = terrain.getCoolTerrain();
  }
  else if(data.currentWeather.type == 'Cold'){
    data.currentTerrain = terrain.getColdTerrain();
  }
  else if(data.currentWeather.type == 'Very Cold'){
    data.currentTerrain = terrain.getVeryColdTerrain();
  }
  else if(data.currentWeather.type == 'Rain'){
    data.currentTerrain = terrain.getRainTerrain();
  }
  else if(data.currentWeather.type == 'Heavy Rain'){
    data.currentTerrain = terrain.getHeavyRainTerrain();
  }
  else if(data.currentWeather.type == 'Snow'){
    data.currentTerrain = terrain.getSnowTerrain();
  }
  else if(data.currentWeather.type == 'Blizzard'){
    data.currentTerrain = terrain.getBlizzardTerrain();
  }
  else if(data.currentWeather.type == 'Heavy Fog'){
    data.currentTerrain = terrain.getHeavyFogTerrain();
  }

  data.playerMoney = '1500';
  data.messages = [];
  res.setHeader('Content-Type', 'application/json');
	res.send(data);
}

//posts the pace
exports.setPace = function(req, res){
  data.currentPace = pace.allPaces[req.params.id];
  res.setHeader('Content-Type', 'application/json');
	res.send(data.currentPace);
}

//returns the data for other files
exports.getGameData = function(){
  return data;
}

//gets the data
exports.getData = function(req, res){
  res.setHeader('Content-Type', 'application/json');
	res.send(data);
}
