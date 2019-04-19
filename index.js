
var mongoose = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server')
mongoose.Promise = Promise;
const mongoServer = new MongoMemoryServer();
var Schema = mongoose.Schema;

let TestSchema = new Schema({
  name: String
})

const Test = new mongoose.model('Test', TestSchema);

mongoose.connect('mongodb://159.203.167.38/test', {useNewUrlParser: true})
.then(() => {
    Test.find({}, function(err, docs) {
      console.log('first');
      console.log(docs);
    });

    Test.find({}, function(err, docs) {
      console.log('second');
      console.log(docs);
    })
})
