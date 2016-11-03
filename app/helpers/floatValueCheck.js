const json = require('./data.json');
const MAX_INT = Number.MAX_SAFE_INTEGER;
let WARNING_TRIGGER = false;
for (var i = 0; i < json.length; i++) {
  let planet = json[i];
  let mass = planet['pl_bmassj'];
  if (mass && mass >= MAX_INT) {
    WARNING_TRIGGER = true;
  }
  console.log(planet['rowid'] + ' ' + mass);
}
console.log(MAX_INT);
console.log('There are numbers with too large of a value? : ' + WARNING_TRIGGER);