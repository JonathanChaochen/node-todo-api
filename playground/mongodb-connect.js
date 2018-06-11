const MongoCilent = require('mongodb').MongoClient;
const { ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';

MongoCilent.connect(url, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('connect to MongoDB server');

  const db = client.db('TodoApp');
  // db.collection('Todos').insertOne(
  //   {
  //     text: 'Something todo',
  //     completed: false
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert todo', err);
  //     }
  //     console.log(JSON.stringify(result.ops, null, 2));
  //   }
  // );

  db.collection('Users').insertOne(
    {
      name: 'Jeff',
      age: 29
    },
    (err, result) => {
      if (err) {
        return console.log('Unable to insert user', err);
      }
      console.log((result.ops[0]._id.getTimestamp()));
    }
  );

  client.close();
});
