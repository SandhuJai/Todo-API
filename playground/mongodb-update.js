const {MongoClient, ObjectID} = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    const db = client.db(dbName);

    // db.collection('todos').findOneAndUpdate({
    //     _id: new ObjectID('5b1927055296bbe7a3e5dd6f')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b1919e49b834c1b79b8716b')
    }, {
        $set: {
            name: 'Jaikirat'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

});