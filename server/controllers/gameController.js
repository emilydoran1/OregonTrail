var gameData = require('../models/gameData');
var pace = require('../models/pace');
var terrain = require('../models/terrain');
var weather = require('../models/weather');

exports.changePace = function(req, res){
  pace.
}

exports.updateGame = function(req, res){

}

exports.resetGame = function(req, res){

}

exports.getGameData = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.data);
}
