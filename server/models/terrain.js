function terrain(inTerrainName, inImgURL){
  this.terrainName = inTerrainName;
  this.imgURL = inImgURL;
}

allTerrains = [];
allTerrains.push(new terrain('Desert', '/images/desert.jpg'));
allTerrains.push(new terrain('Mountains', '/images/mountains.jpg'));
allTerrains.push(new terrain('Forest', '/images/forest.jpg'));
allTerrains.push(new terrain('Plains', '/images/plains.jpg'));

//generates a random terrain that fits the weather very hot
//will only return desert
exports.getVeryHotTerrain = function(){
  var terrain = allTerrains[0];
  return terrain;
}

//generates a random terrain that fits the weather hot
//will only return desert
exports.getHotTerrain = function(){
  var terrain = allTerrains[0];
  return terrain;
}

//generates a random terrain that fits the weather warm
//will return either forest or plains
exports.getWarmTerrain = function(){
  var randTerrain = (Math.floor(Math.random() * 2) + 2);
  var terrain = allTerrains[randTerrain];
  return terrain;
}

//generates a random terrain that fits the weather cool
//will return either forest or plains
exports.getCoolTerrain = function(){
  var randTerrain = (Math.floor(Math.random() * 2) + 2);
  var terrain = allTerrains[randTerrain];
  return terrain;
}

//generates a random terrain that fits the weather cold
//will only return mountains
exports.getColdTerrain = function(){
  var terrain = allTerrains[1];
  return terrain;
}

//generates a random terrain that fits the weather very cold
//will only return mountains
exports.getVeryColdTerrain = function(){
  var terrain = allTerrains[1];
  return terrain;
}

//generates a random terrain that fits the weather rain
//will return mountains, forest, or plains
exports.getRainTerrain = function(){
  var randTerrain = (Math.floor(Math.random() * 3) + 1);
  var terrain = allTerrains[randTerrain];
  return terrain;
}

//generates a random terrain that fits the weather heavy rain
//will only return forest
exports.getHeavyRainTerrain = function(){
  var terrain = allTerrains[2];
  return terrain;
}

//generates a random terrain that fits the weather snow
//will only return mountains
exports.getSnowTerrain = function(){
  var terrain = allTerrains[1];
  return terrain;
}

//generates a random terrain that fits the weather blizzard
//will only return mountains
exports.getBlizzardTerrain = function(){
  var terrain = allTerrains[1];
  return terrain;
}

//generates a random terrain that fits the weather heavy fog
//will return either desert, mountains, forest, or plains
exports.getHeavyFogTerrain = function(){
  var randTerrain = Math.floor(Math.random() * 4);
  var terrain = allTerrains[randTerrain];
  return terrain;
}
