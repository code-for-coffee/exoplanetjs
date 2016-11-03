var app = require('../app/app');

describe('test to verify PlanetTypesListModel', function() {

  var model = app.PlanetTypesListModel;

  it('should have an object that contains more than one entry', function() {
    expect(Object.keys(model).length).toBeGreaterThan(0);
  });

  it('should contain a list of of 7 planet names', function() {
    expect(Object.keys(model).length).toBe(7);
  });

  it('has models that has a minMass key', function() {
    expect(model['Asteroidan'].hasOwnProperty('minMass')).toBe(true);
  });

  it('has models that has a maxMass key', function() {
    expect(model['Asteroidan'].hasOwnProperty('maxMass')).toBe(true);
  });

  it('has models that has a desc key', function() {
    expect(model['Asteroidan'].hasOwnProperty('desc')).toBe(true);
  });

});
