var gameController = require('../controllers/gameController');

var gameScreens = ['Main Menu', 'Choose Profession', 'Leader Name', 'Other Names',
  'Month', 'Selections', 'Trail'];

exports.getScreen = function(req, res){
  var gameScreen = gameScreens[req.params.screen];
  res.setHeader('Content-Type', 'text/html');
	res.send(gameScreen);
}

exports.saveProfession = function(req, res){
  gameController.getGameData().playerProfession = req.body.profession;
	res.setHeader('Content-Type', 'application/json');
	res.send(gameController.getGameData().playerProfession);
}

exports.savePlayerName = function(req, res){
  var newName = req.body.name;
	gameController.getGameData().playerNames[req.params.id] = newName;
	res.setHeader('Content-Type', 'application/json');
	res.send(gameController.getGameData().playerNames);
}

exports.saveStartMonth = function(req, res){
	gameController.getGameData().startMonth = req.body.month;
	res.setHeader('Content-Type', 'application/json');
	res.send(gameController.getGameData().startMonth);
}
