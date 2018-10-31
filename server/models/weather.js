function weather(inId, inType, inHealthChange, inMileChange, inProbability){
  this.id = inId;
  this.type = inType;
  this.healthChange = inHealthChange;
  this.mileChange = inMileChange;
  this.probability = inProbability;
}

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

exports.getRandomWeather = function(){
  var randNum = Math.floor((Math.random() * 100) + 1);
  var weather;
  if(randNum <= 10)
    weather = allWeathers[0];
  else if(randNum > 10 && randNum <= 20)
    weather = allWeathers[1];
  else if(randNum > 20 && randNum <= 40)
    weather = allWeathers[2];
  else if(randNum > 40 && randNum <= 50)
    weather = allWeathers[3];
  else if(randNum > 50 && randNum <= 60)
    weather = allWeathers[4];
  else if(randNum > 60 && randNum <= 70)
    weather = allWeathers[5];
  else if(randNum > 70 && randNum <= 80)
    weather = allWeathers[6];
  else if(randNum > 80 && randNum <= 85)
    weather = allWeathers[7];
  else if(randNum > 85 && randNum <= 90)
    weather = allWeathers[8];
  else if(randNum > 90 && randNum <= 95)
    weather = allWeathers[9];
  else if(randNum > 95 && randNum <= 100)
    weather = allWeathers[10];

  return weather;
}
