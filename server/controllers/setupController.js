var gameData = require('../models/gameData');
var gameController = require('../controllers/gameController');

var gameScreens = [1, 2, 3, 4];
var data = gameController.getGameData();

exports.getScreen = function(req, res){
  var screen = gameScreens[req.params.id];
  res.setHeader('Content-Type', 'text/html');
	res.send(screen);
}

exports.saveProfession = function(req, res){
  //var profession = req.body.profession;
	data.playerProfession = req.params.profession;
	res.setHeader('Content-Type', 'application/json');
	res.send(data.playerProfession);
}

exports.savePlayerName = function(req, res){
  var newName = req.params.name;
	data.playerNames.push(newName);
	res.setHeader('Content-Type', 'application/json');
	res.send(data.playerNames);
}

exports.saveStartMonth = function(req, res){
  //var month = req.body.month;
	data.startMonth = req.params.month;
	res.setHeader('Content-Type', 'application/json');
	res.send(data.startMonth);
}
