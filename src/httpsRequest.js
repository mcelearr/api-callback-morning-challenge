const https = require('https');

module.exports = {
  httpsRequest: (host, path, callback) => {
    const options = {
      method: 'GET',
      port: 443,
      host: host,
      path: path
    };
    const req = https.request(options, res => {
      let data = '';
      res.on('data', (d) => {
        data += d;
      });
      res.on('end', (d) => {
        callback(data);
      });
    });
    req.end();
  }

};
