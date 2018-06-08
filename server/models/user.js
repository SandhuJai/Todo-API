// User
let mongoose = require('mongoose');

let User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        validate: [{
            validator: (value) => {
                return value.indexOf('@gmail.com') >= 0;
            },
            msg: 'Not a valid Email Address'
        }]
    }
});

module.exports = {
    User
};