const {MongoClient, ObjectID} = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    const db = client.db(dbName);

    // db.collection('todos').find({
    //     _id: new ObjectID('5b191e775296bbe7a3e5dbb6')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err); 
    // });

    // db.collection('todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err); 
    // });

    db.collection('Users').find({
        name: 'Jaikirat'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data from the Mongo DB database ', err);
    });

    // client.close();
});