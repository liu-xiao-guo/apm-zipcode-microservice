
// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({
    // Override service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'zipcode service',
  
    // Use if APM Server requires a token
    secretToken: '1234561',
  
    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'http://localhost:8200'

    # verifyServerCert: false,
    i# serverCaCertFile: "/Users/liuxg/nodejs/apm/zipcode-microservice-node/ca.crt"
  })

var express = require('express')
var app = express();
var port = process.env.PORT || 3000;

var routes = require('./api/routes');
routes(app);
app.listen(port, function() {
    console.log('Server started on port: ' + port);
});


