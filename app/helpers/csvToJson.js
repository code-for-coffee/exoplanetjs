/**
 * Created by codeforcoffee on 11/2/16.
 */
const Converter = require("csvtojson").Converter;
const fs = require('fs');
const path = require('path');

class CSVObectifier {
  constructor(csvFileData) {
    this.converter = new Converter({});
    this.csv = csvFileData;
    this.columns = [];
    this.Column = function(colName, colDescriptiveName) {
      return { colName : colDescriptiveName };
    }
  };
  convert(callback) {
    this.converter.fromString(this.csv, function(err, json){
      callback(json);
    });
  };
  writeFile(filename) {
    if (!filename) filename = 'default.json';
    var x = (result) => {
      console.log(result);
      fs.writeFileSync(filename, JSON.stringify(result), 'utf8');
    };
    this.convert(x);
  };
};
// test our class and verify things work
var data = fs.readFileSync(path.join(__dirname, 'planets.csv'), { encoding : 'utf8'});
console.log(data);
let x = new CSVObectifier(data);
x.writeFile('data.json');

module.exports = CSVObectifier;

