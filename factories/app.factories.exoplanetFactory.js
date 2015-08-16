var app = app || {};
app.factories = app.factories || {};


app.factories.exoplanetFactory = function(jupiterMass) {

	var exoplanetObj = {};

	exoplanetObj.jupiterMass = parseFloat(jupiterMass);
	exoplanetObj.earthMass = app.conversions.convertJupiterMassToEarthMass(exoplanetObj.jupiterMass);
	exoplanetObj.classification = app.helpers.getPlanetType(exoplanetObj.earthMass);

	return exoplanetObj;

};
