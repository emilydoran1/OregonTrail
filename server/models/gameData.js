var pace = require('../models/pace');

function gameData(inPlayerNames, inplayerStatus, inplayerProfession,
  inplayerMoney, inStartMonth, inMilesTraveled, inGroupHealth, inCurrentPace,
  inDaysOnTrail, inCurrentWeather, inCurrentTerrain, inMessages){
    this.playerNames = inPlayerNames;
    this.playerStatus = inplayerStatus
    this.playerProfession = inplayerProfession;
    this.playerMoney = inplayerMoney;
    this.startMonth = inStartMonth;
    this.milesTraveled = inMilesTraveled;
    this.groupHealth = inGroupHealth;
    this.currentPace = inCurrentPace;
    this.daysOnTrail = inDaysOnTrail;
    this.currentWeather = inCurrentWeather;
    this.currentTerrain = inCurrentTerrain;
    this.messages = inMessages;
}

exports.addData = function(){
  var data = new gameData(['','','','',''],[true, true, true, true, true], '', 0,
    '', 0, 100, pace.allPaces[0], 0, '', '', []);
  return data;
}
