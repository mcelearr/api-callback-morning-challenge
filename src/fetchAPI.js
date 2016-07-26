const httpsRequest = require('./httpsRequest.js').httpsRequest;

httpsRequest('maps.googleapis.com',`/maps/api/geocode/json?address=14+palmers+road,
+London,+e20sy&key=AIzaSyA-CPghzSNJEsGODSZcKdeBvG-pTA6UqNM`, (response) => {
  httpsRequest('www.metaweather.com','/api/location/search/?lattlong=51.5295318,-0.0422949',(response) => {
    httpsRequest('www.metaweather.com','/api/location/44418/', (response) => {
      console.log(response);
    });
  });
});

//

// const renderData = function(options, cb){
//   getGeoCodedLocation(options, cb){
//     getWeather(options, cb){
//     }
//   }
// };
