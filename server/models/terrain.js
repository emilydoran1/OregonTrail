function terrain(inTerrainName, inImgURL){
  this.terrainName = inTerrainName;
  this.imgURL = inImgURL;
}

/*setTerrain = function(inTerrainName, inImgURL){
  var playerTerrain = new terrain(inTerrainName, inImgURL);
  return playerTerrain;
}*/

//var terrain = require('../models/terrain');

allTerrains = [];
allTerrains.push(new terrain('Desert', '/images/desert.jpg'));
allTerrains.push(new terrain('Mountains', '/images/mountains.jpg'));
allTerrains.push(new terrain('Forest', '/images/forest.jpg'));
allTerrains.push(new terrain('Plains', '/images/plains.jpg'));

exports.getAllTerrains = function(){
  return(allTerrains);
}

/*exports.getTerrain = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(terrains);
}*/
