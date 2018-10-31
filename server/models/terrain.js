function terrain(inTerrainName, inImgURL){
  this.terrainName = inTerrainName;
  this.imgURL = inImgURL;
}

allTerrains = [];
allTerrains.push(new terrain('Desert', '/images/desert.jpg'));
allTerrains.push(new terrain('Mountains', '/images/mountains.jpg'));
allTerrains.push(new terrain('Forest', '/images/forest.jpg'));
allTerrains.push(new terrain('Plains', '/images/plains.jpg'));

exports.getRandomTerrain = function(){
  var randTerrain = Math.floor(Math.random() * 4);
  var terrain = allTerrains[randTerrain];
  return terrain;
}
