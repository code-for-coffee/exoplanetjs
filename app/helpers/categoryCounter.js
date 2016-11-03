const json = require('./data.json');
let counter = 0;
for (var i = 0; i < json.length; i++) {
  let planet = json[i];
  let mass = planet['pl_bmassj'];
  if (mass > 0) {
    counter++;
  }
}
console.log(`There are ${json.length} items and only ${counter} have logged masses.`);
// There are 3402 items and only 1193 have logged masses.
