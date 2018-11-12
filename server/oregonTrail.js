const express = require('express')
const app = express()
const port = 1337
var bodyParser = require('body-parser');
app.use(bodyParser.json({type:'application/json'}));

app.use(express.static('client/public'));

app.get('/', function(req, res){
  res.sendFile('index.html', {root: './client/views'})
})

app.get('/mainmenu', function(req, res){
  res.sendFile('mainmenu.html', {root: './client/views'})
})

app.get('/topten', function(req, res){
  res.sendFile('topten.html', {root: './client/views'})
})

app.get('/setup', function(req, res){
  res.sendFile('setup.html', {root: './client/views'})
})

app.get('/trail', function(req, res){
  res.sendFile('trail.html', {root: './client/views'})
})

var topTenController = require('./controllers/topTenController');

app.route('/api/topTen/topTen')
  .get(topTenController.getCurrentScores);


var gameController = require('./controllers/gameController');

app.route('/api/game/nextDay')
  .get(gameController.nextDay);

app.route('/api/game/reset')
  .get(gameController.reset);

app.route('/api/game/setPace/:id')
  .post(gameController.setPace);

var getPaces = require('./models/pace');
app.route('/api/game/allPaces')
  .get(getPaces.getAllPaces);


var setupController = require('./controllers/setupController');

app.route('/api/setup/getScreen/:screen')
  .get(setupController.getScreen);

app.route('/api/setup/saveProfession')
  .post(setupController.saveProfession);

app.route('/api/setup/savePlayerName/:id')
  .post(setupController.savePlayerName);

app.route('/api/setup/saveStartMonth')
  .post(setupController.saveStartMonth);

app.listen(port, () => console.log('OregonTrail is running!'));
