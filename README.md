# exoplanetJs
Collection of Javascript files and functions for use with Exoplanet data parsing/rendering/conversion.

# Creating a Visual Graph of Exoplanet Data with Javascript

1. Visit http://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets
2. Select only Planet Mass/Planet M*sin(i) (both are Jupiter Planet Mass)
3. 'Download Table' => Download selected records and columns
4. Use http://www.convertcsv.com/csv-to-json.htm to conver to JSON
5. Inspect using Node; copy/paste to a variable assignment (ex: var epd = .. then copypaste)
6. Check length - `epd.length`
7. Inspect data source
8. Each object in the JSON array is structured to display the planet number
9. Each object in the JSON array is structured to display the first value
10. Each object in the JSON array is structured to display a second value if it exists
11. They are split using: 'planet_no,first_mass,second_mass' or `rowid,pl_massj,pl_msinij`
12. We will need to look through data and verify this data - could be done using regex or `.split()`
13. Can skip first 5 items in collection; they contain metadata information
14. Create test object like so:

  ```javascript
  var test = {
    "FIELD1":"1884,,1.98100",
    "FIELD2":"",
    "FIELD3":""
  };
  ```
15. There is a Planetary Mass Classification organization (http://phl.upr.edu/library/notes/amassclassificationforbothsolarandextrasolarplanets)
15. This scale is based on relative earth mass
15. Our exoplanet data is jupiter mass.. time to convert
16. Jupiter is equivilent to 317.83 Earth masses (https://en.wikipedia.org/wiki/Jupiter_mass)
17. Convert Jupiter mass to Earth Mass

  ```
  1 (jupiter mass)       input_value
  ______               = ___________
  317.83 (earth mass)    output_value
  ```
