var topTen = require('../models/topTen');

/*exports.currentTopScores = [];
exports.currentTopScores.push(topTen.addScore('Emily', 3500, '01/7/13'));
exports.currentTopScores.push(topTen.addScore('Jack', 10000, '02/14/18'));
exports.currentTopScores.push(topTen.addScore('Allie', 3, '06/22/17'));
exports.currentTopScores.push(topTen.addScore('Erin', 70, '10/1/18'));
exports.currentTopScores.push(topTen.addScore('Nick', 50, '05/14/17'));
exports.currentTopScores.push(topTen.addScore('Jim', 100, '01/2/2013'));
exports.currentTopScores.push(topTen.addScore('Sarah', 0, '10/8/14'));
exports.currentTopScores.push(topTen.addScore('Kevin', 55, '07/31/16'));
exports.currentTopScores.push(topTen.addScore('Maria', 1, '01/2/2013'));
exports.currentTopScores.push(topTen.addScore('Mike', 200, '01/19/2016'));*/

var mysql = require('mysql');

//mySQL connection
var con = mysql.createConnection({
  host: 'localhost',
  user: 'ttUser',
  password: '12345'
});

con.connect(function(err){
  if(err) throw err;
  console.log('MySQL is connected.');
  var sql = 'use otTopTen';
  con.query(sql, function(err, result){
    if(err) throw err;
  });
});

exports.getTopScores = function(req, res){
  var currentTopScores = [];

  var sql = 'select playerName, playerScore, dateEarned from topTen';
  con.query(sql, function(err, rows, fields) {
    if(err) throw err;
    for(var i = 0; i < rows.length; i++){
      currentTopScores[i] = topTen.addScore(rows[i].playerName, rows[i].playerScore,
        rows[i].dateEarned);
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(currentTopScores);
  })
}

exports.saveTopScore = function(req, res){
  // var sql = 'insert into topTen (playerName, playerScore, dateEarned) values '
  //   + '(' + req.body.playerName + ',' + req.body.playerScore + ',' + req.body.dateEarned + ')';
  var sql = "Insert into topTen (playerName, playerScore, dateEarned) VALUES ('"+req.body.playerName+"','"+req.body.playerScore+"','"+req.body.dateEarned+"')";
  con.query(sql, function(err, result){
    if(err) throw err;
    console.log('Result: ' + result);
  });

  res.setHeader('Content-Type', 'application/json');
  res.send('saved score for: ' + req.body.playerName);
}

/*exports.getCurrentScores = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.currentTopScores);
}*/
