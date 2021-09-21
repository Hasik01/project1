const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  firstName: String,
  lastName: String,
  phone: String,
});

const UserModel = mongoose.model('users', userSchema );

module.exports = {
  UserModel,
}