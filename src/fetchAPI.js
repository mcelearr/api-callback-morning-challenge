const https = require('https');

const getGeoCodedLocation = (callback) => {
  const geoOptions = {
    method: 'GET',
    port: 443,
    host: 'maps.googleapis.com',
    path: '/maps/api/geocode/json?address=14+palmers+road,+London,+e20sy&key=AIzaSyA-CPghzSNJEsGODSZcKdeBvG-pTA6UqNM'
  };
  const req = https.request(geoOptions, locationRes => {
    let data = '';
    locationRes.on('data', (d) => {
      data += d;
    });
    locationRes.on('end', (d) => { //when data sending finished
      callback(data);
    });
  });
  req.end();
};

const getWoeid = function(callback){
  const idOptions = {
    method: 'GET',
    host: 'www.metaweather.com',
    path: '/api/location/search/?lattlong=51.5295318,-0.0422949',
    port: 443
  };
  const req = https.request(idOptions, weatherRes => {
    let data = '';
    weatherRes.on('data', (d) => {
      data += d;
    });
    weatherRes.on('end', (d) => { //when data sending finished
      callback(data);
    });
  });
  req.end();
};

const getWeather = function(callback){
  const weatherOptions = {
    method: 'GET',
    host: 'www.metaweather.com',
    path: '/api/location/44418/',
    port: 443
  };
  const req = https.request(weatherOptions, weatherRes => {
    let data = '';
    weatherRes.on('data', (d) => {
      data += d;
    });
    weatherRes.on('end', (d) => { //when data sending finished
      callback(data);
    });
  });
  req.end();
};

getGeoCodedLocation((response) => {console.log(response);});
getWoeid((response) => {console.log(response);});
getWeather((response) => {console.log(response);});

// const renderData = function(options, cb){
//   getGeoCodedLocation(options, cb){
//     getWeather(options, cb){
//     }
//   }
// };

// const logResponse = function (response) {
//   console.log(response);
// };
//
// getGeoCodedLocation(logResponse);
//
// options, cb
