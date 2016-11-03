'use strict' //es5
var PlanetTypesListModel = require('../models/PlanetTypesCollection');

function getPlanetType(mass) {
  var planetType;
  var planets = Object.keys(PlanetTypesListModel);

  for (let inc = 0; inc < planets.length; inc++) {
    var currentPlanet = planets[inc];
    if (mass >= PlanetTypesListModel[currentPlanet].minMass && mass <= PlanetTypesListModel[currentPlanet].maxMass) {
      var planetTypes = Object.keys(PlanetTypesListModel);
      planetType = currentPlanet;
    }
  }
  return planetType;

};
module.exports = getPlanetType;
