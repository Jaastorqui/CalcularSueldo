var express = require('express');
var controlador = require('./controller/functions.js');
var Promise = require("bluebird");
var MongoDB = Promise.promisifyAll(require("mongodb"));
var cors = require('cors');

var app = express();


// PreLoad in public folder
app.use(express.static('public'));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



app.post('/average',cors(corsOptions), function (req, res) {

  req.params.sueldo = 20000;
  // Call checkPost for check and find in MongoDb
        
    var isValido = controlador.checkPost(req)
    if (!isValido)
      res.jsonp = json;
    
    
    var url = 'mongodb://vps355517.ovh.net:27017/calcularsueldo';

        MongoDB.connect(url, function(err, db) {  
                if (err) {
                        throw err;
                } else {
                        console.log('Successfully connected to the database');
                }
                var contentCollection = db.collection('userMedia');
                contentCollection.find({}).toArray(function(err, result) {
                        if (err) {
                                throw err;
                        } else {
                                res.status(200).json(result);
                                db.close();
                        }
                });        
        });

    
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
