function pace(inPaceName, inMiles, inHealthChange){
  this.paceName = inPaceName;
  this.miles = inMiles;
  this.healthChange = inHealthChange;
}

exports.setPace = function(inPaceName, inMiles, inHealthChange){
  var playerPace = new pace(inPaceName, inMiles, inHealthChange);
  return playerPace;
}

//var pace = require('../models/pace');

allPaces = [];
allPaces.push(new pace('Steady', 20, 0));
allPaces.push(new pace('Strenuous', 30, -3));
allPaces.push(new pace('Grueling', 35, -8));
allPaces.push(new pace('Resting', 0, 5));

exports.getAllPaces = function(){
  return(allPaces);
}

/*exports.getPace = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(paces);
}*/
