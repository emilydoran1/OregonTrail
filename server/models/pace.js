function pace(inPaceName, inMiles, inHealthChange){
  this.paceName = inPaceName;
  this.miles = inMiles;
  this.healthChange = inHealthChange;
}

exports.allPaces = [];
exports.allPaces.push(new pace('Steady', 20, 0));
exports.allPaces.push(new pace('Strenuous', 30, -3));
exports.allPaces.push(new pace('Grueling', 35, -8));
exports.allPaces.push(new pace('Resting', 0, 10));

exports.getAllPaces = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.allPaces);
}
