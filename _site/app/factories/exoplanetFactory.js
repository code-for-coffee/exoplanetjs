
function exoplanetFactory(jupiterMass) {

	var exoplanetObj = {};

	exoplanetObj.jupiterMass = parseFloat(jupiterMass);
	exoplanetObj.earthMass = app.conversions.convertJupiterMassToEarthMass(exoplanetObj.jupiterMass);
	exoplanetObj.classification = app.helpers.getPlanetType(exoplanetObj.earthMass);

	return exoplanetObj;

};

module.exports = exoplanetFactory;
