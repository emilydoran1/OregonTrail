function weather(inId, inType, inHealthChange, inMileChange, inProbability){
  this.id = inId;
  this.type = inType;
  this.healthChange = inHealthChange;
  this.mileChange = inMileChange;
  this.probability = inProbability;
}

/*setWeather = function(nId, inType, inHealthChange, inMileChange, inProbability){
  var gameWeather = new weather(nId, inType, inHealthChange, inMileChange, inProbability);
  return gameWeather;
}*/

// var weather = require('../models/weather');

allWeathers = [];
allWeathers.push(new weather(1, 'Very Hot', -8, .7, .1));
allWeathers.push(new weather(2, 'Hot', -3, .9, .1));
allWeathers.push(new weather(3, 'Warm', 1, 1, .2));
allWeathers.push(new weather(4, 'Cool', 1, .95, .1));
allWeathers.push(new weather(5, 'Cold', -5, .8, .1));
allWeathers.push(new weather(6, 'Very Cold', -12, .7, .1));
allWeathers.push(new weather(7, 'Rain', -4, .6, .1));
allWeathers.push(new weather(8, 'Heavy Rain', -8, .4, .05));
allWeathers.push(new weather(9, 'Snow', -15, .3, .05));
allWeathers.push(new weather(10, 'Blizzard', -30, .1, .05));
allWeathers.push(new weather(11, 'Heavy Fog', -3, .5, .05));

exports.getAllWeathers = function(){
  return(allWeathers);
}

/*exports.getWeather = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(weathers);
}*/
