var app = require('../app/app');

describe('test to verify we can detect all 7 types of planets', function() {

  it('can detect an asteroidan planet', function() {
    var planetMass = 0;
    var planetType = app.getPlanetType(planetMass);
    expect(planetType).toEqual("Asteroidan");
  });

  it('can detect an mercurian planet', function() {
    var planetMass = 0.0011;
    var planetType = app.getPlanetType(planetMass);
    expect(planetType).toEqual("Mercurian");
  });

  it('can detect an Subterran planet', function() {
    var planetMass = 0.45;
    var planetType = app.getPlanetType(planetMass);
    expect(planetType).toEqual("Subterran");
  });

  it('can detect an Terran planet', function() {
    var planetMass = 1;
    var planetType = app.getPlanetType(planetMass);
    expect(planetType).toEqual("Terran");
  });

  it('can detect an Superterran planet', function() {
    var planetMass = 9;
    var planetType = app.getPlanetType(planetMass);
    expect(planetType).toEqual("Superterran");
  });

  it('can detect an Neptunian planet', function() {
    var planetMass = 42;
    var planetType = app.getPlanetType(planetMass);
    expect(planetType).toEqual("Neptunian");
  });

  it('can detect an Jovian planet', function() {
    var planetMass = 500;
    var planetType = app.getPlanetType(planetMass);
    expect(planetType).toEqual("Jovian");
  });

});
