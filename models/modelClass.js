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

export modelClass;
