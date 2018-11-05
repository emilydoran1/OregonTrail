var gameData = require('../models/gameData');
var gameController = require('../controllers/gameController');

var gameScreens = [];
var data = gameController.getGameData();

exports.getScreen = function(req, res){
  var screen = gameScreens[req.params.id];
  res.setHeader('Content-Type', 'text/html');
	res.send(screen);
}

exports.saveProfession = function(req, res){
  var profession = req.body;
	data.playerProfession = profession;
	res.setHeader('Content-Type', 'application/json');
	res.send(profession);
}

exports.savePlayerName = function(req, res){
  var newName = req.body;
	data.playerNames.push(newName);
	res.setHeader('Content-Type', 'application/json');
	res.send(newName);
}

exports.saveStartMonth = function(req, res){
  var month = req.body;
	data.startMonth = month;
	res.setHeader('Content-Type', 'application/json');
	res.send(month);
}
