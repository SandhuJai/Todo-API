const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mkbhd:hellohello123@ds147190.mlab.com:47190/todoapp_jaikirat' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};