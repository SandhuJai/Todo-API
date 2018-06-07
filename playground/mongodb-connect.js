// const Mongo = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    const database = client.db(dbName);
    // const todos = database.collection('todos');
    
    // todos.insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // const users = database.collection('Users');

    // users.insertOne({
    //     name: 'Jaikirat',
    //     age: 19,
    //     location: 'Ludhiana'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
});