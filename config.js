
var Port = 5000;
// var MongoUri = "mongodb://localhost:27017/LIMS";
var MongoUri = "mongodb://mongo:27017/LIMS";
// var MongoUri = "mongodb://172.17.0.1:27017/LIMS";
var jwtSecret = 'jwtSecret';

module.exports = {
    Port,
    MongoUri,
    jwtSecret
}