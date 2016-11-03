let PlanetTypesCollection = {
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
module.exports = PlanetTypesCollection;
