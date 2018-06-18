const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Todos';

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
mongoose.connect(url)