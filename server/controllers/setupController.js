var gameData = require('../models/gameData');
var gameController = require('../controllers/gameController');

var gameScreens = ['Screen 1', 'Screen 2', 'Screen 3', 'Screen 4'];

exports.getScreen = function(req, res){
  var gameScreen = gameScreens[req.params.screen];
  res.setHeader('Content-Type', 'text/html');
	res.send(gameScreen);
}

exports.saveProfession = function(req, res){
  //var profession = req.body.profession;
	gameController.getGameData().playerProfession = req.params.profession;
	res.setHeader('Content-Type', 'application/json');
	res.send(gameController.getGameData().playerProfession);
}

exports.savePlayerName = function(req, res){
  var newName = req.params.name;
	gameController.getGameData().playerNames.push(newName);
	res.setHeader('Content-Type', 'application/json');
	res.send(gameController.getGameData().playerNames);
}

exports.saveStartMonth = function(req, res){
  //var month = req.body.month;
	gameController.getGameData().startMonth = req.params.month;
	res.setHeader('Content-Type', 'application/json');
	res.send(gameController.getGameData().startMonth);
}
