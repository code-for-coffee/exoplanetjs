/**
 * exoplanet.js
 * Created on 8/16/2015.
 *
 * exoplanetModel Class
 * @param paramsObject
 * @return
 */
class modelClass {
  
  let reservedWords = ['mapValues', 'properties', 'toObject', 'attributes'];
  
  let keyList = Object.keys(paramsObject);
    keyList.forEach(function(key) {

      var attributeName = key;
  
      reservedWords.forEach(function(key) {
         if (attributeName == key) throw new ReferenceError('Illegal use of reservedword in parameters:' + attributeName);
      });

  });
  
  toObject() {
    return this.properties;
  }
  
}
 
class exoplanetModel extends modelClass {

  constructor(properties) {
      this.properties = properties;
    }

    

}

export exoplanetModel;
