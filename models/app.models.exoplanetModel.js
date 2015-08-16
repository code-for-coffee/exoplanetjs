var app = app || {};

app.models = app.models || {};

app.models.exoplanetModel = function(paramsObject) {

  this.jupiterMass = paramsObject.jupiterMass || undefined;
  this.earthMass = paramsObject.earthMass || 0;

  if (this.jupiterMass == undefined && this.earthMass == undefined) {
    throw new TypeError('No Earth of Jupiter Mass defined');
  } else if (this.earthMass == undefined) {
    this.earthMass = app.conversions.convertJupiterMassToEarthMass(this.jupitjupiterMass);
  }

  this.type = app.helpers.getPlanetType(this.earthMass);

};
