const {MongoClient, ObjectID} = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    const db = client.db(dbName);

    // db.collection('todos').deleteMany({
    //     text: 'Eat Lunch'
    // }).then((res) => {
    //     console.log(res);
    // }, (err) => {

    // });

    // db.collection('todos').deleteOne({
    //     text: 'Eat Lunch'
    // }).then((res) => {
    //     console.log(res);
    // }, (err) => {

    // });

    // db.collection('todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({
    //     name: 'Jaikirat'
    // }).then((res) => {
    //     console.log('Done');
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b191b973ed5e61bdc6aec0f')
    }).then((res) => {
        console.log('Done');
    });

});