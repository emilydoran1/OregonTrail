var gameController = require('../controllers/gameController');

var gameScreens = [];

exports.getScreen = function(req, res){
  var gameScreen = gameScreens[req.params.id];
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

var startGame1 = "<ol>"
  + "<li id = \"banker\">Be a Banker From Boston</li>"
  + "<li id = \"carpenter\">Be a Carpenter From Ohio</li>"
  + "<li id = \"farmer\">Be a Farmer From Illinois</li>"
  + "<li>Find Out the Differences Between the Choices</li>"
  + "</ol>"
  + "<br>"
  + "<div id=\"selectedOption\">What is your choice?</div>";

var startGame2 = "<p>What is the first name of the wagon leader?</p>"
  + "<form>"
  + "First Name: <input type = \"text\" name = \"name\" id = \"player1\">"
  + "</form>"
  + "<br>"
  + "<button id = \"page2\">Next</button>";

var startGame3 = "<p>What are the first names of the other members of your party?</p>"
  + "<form>"
  + "Player Name: <input type = \"text\" name = \"name\" id = \"player2\">"
  + "<br>"
  + "<br>"
  + "Player Name: <input type = \"text\" name = \"name\" id = \"player3\">"
  + "<br>"
  + "<br>"
  + "Player Name: <input type = \"text\" name = \"name\" id = \"player4\">"
  + "<br>"
  + "<br>"
  + "Player Name: <input type = \"text\" name = \"name\" id = \"player5\">"
  + "</form>"
  + "<br>"
  + "<button id = \"page3\">Next</button>";

var startGame4 = "<p>It is 2018. Your jumping off place for oregon is Poughkeepsie,"
  + "New York. You must decide which month to leave. </p>"
  + "<ol>"
  + "<li id = \"march\">March</li>"
  + "<li id = \"april\">April</li>"
  + "<li id = \"may\">May</li>"
  + "<li id = \"june\">June</li>"
  + "<li id = \"july\">July</li>"
  + "</ol>"
  + "<p>What is your choice?</p>";

var startGame5 = "<p>Congratulations! You are ready to start on your journey!</p>"
  + "<p>Here are the settings you selected for the game</p>"
  + "<p>Wagon Leader: </p>"
  + "<p>Member: </p>"
  + "<p>Member: </p>"
  + "<p>Member: </p>"
  + "<p>Member: </p>"
  + "<p>Your Profession: </p>"
  + "<p>Current Bank Account: </p>"
  + "<p>Month Leaving: </p>"
  + "<b><p id = \"trail\">  Press the Space To Travel The Trail!</p></b>";

gameScreens.push(startGame1);
gameScreens.push(startGame2);
gameScreens.push(startGame3);
gameScreens.push(startGame4);
gameScreens.push(startGame5);
