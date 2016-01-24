(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var exoplanetjs = exoplanetjs || {};
exoplanetjs.PlanetTypesListModel = require('./models/PlanetTypesListModel.js');
module.exports = exoplanetjs;

},{"./models/PlanetTypesListModel.js":2}],2:[function(require,module,exports){
'use strict';

var PlanetTypesListModel = {
	Asteroidan: {
		minMass: 0,
		maxMass: 0.00001,
		desc: 'Asteroidans are small irregular bodies (below the hydrostatic equilibrium) that are not able to hold a stable atmosphere.'
	},
	Mercurian: {
		minMass: 0.00011,
		maxMass: 0.1,
		desc: 'Mercurians are only able to hold a significant atmospheres in the cold zones beyond the snow line (i.e. Titan).'
	},
	Subterran: {
		minMass: 0.10001,
		maxMass: 0.5,
		desc: 'Subterrans are able to hold a significant atmospheres after the outer edges of the habitable zone (i.e. Mars).'
	},
	Terran: {
		minMass: 0.50001,
		maxMass: 2,
		desc: 'Terrans are able to hold a significant atmosphere with liquid water within the habitable zone (i.e. Earth).'
	},
	Superterran: {
		minMass: 2.00001,
		maxMass: 10,
		desc: 'Superterrans are able to hold dense atmospheres with liquid water within the habitable zone.'
	},
	Neptunian: {
		minMass: 10.00001,
		maxMass: 50,
		desc: 'Neptunians can have dense atmospheres in the hot zone.'
	},
	Jovian: {
		minMass: 50.00001,
		maxMass: 5000,
		desc: 'Neptunians can have dense atmospheres in the hot zone.'
	}
};
module.exports = PlanetTypesListModel;

},{}]},{},[1])(exoplanetjs);
