var topTen = require('../models/topTen');

exports.currentTopScores = [];
exports.currentTopScores.push(topTen.addScore('Emily', 3500, '01/7/13'));
exports.currentTopScores.push(topTen.addScore('Jack', 10000, '02/14/18'));
exports.currentTopScores.push(topTen.addScore('Allie', 3, '06/22/17'));
exports.currentTopScores.push(topTen.addScore('Erin', 70, '10/1/18'));
exports.currentTopScores.push(topTen.addScore('Nick', 50, '05/14/17'));
exports.currentTopScores.push(topTen.addScore('Jim', 100, '01/2/2013'));
exports.currentTopScores.push(topTen.addScore('Sarah', 0, '10/8/14'));
exports.currentTopScores.push(topTen.addScore('Kevin', 55, '07/31/16'));
exports.currentTopScores.push(topTen.addScore('Maria', 1, '01/2/2013'));
exports.currentTopScores.push(topTen.addScore('Ed', 200, '01/19/2016'));

exports.getCurrentScores = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.currentTopScores);
}
