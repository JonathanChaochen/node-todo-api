const MongoCilent = require('mongodb').MongoClient;
const { ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';

MongoCilent.connect(url, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('connect to MongoDB server');

  const db = client.db('TodoApp');

  //findOneAndUpdate
  // db
  //   .collection('Todos')
  //   .findOneAndUpdate(
  //     { _id: new ObjectID('5b1fa0e7ef9254b557f46bed') },
  //     { $set: { completed: true } },
  //     {
  //       returnOriginal: false
  //     }
  //   )
  //   .then(result => {
  //     console.log(result);
  //   });

  db
    .collection('Users')
    .findOneAndUpdate(
      { _id: new ObjectID('5b1e46dc7387637a362b0b24') },
      { $set: { name: 'Chao' }, $inc: { age: -15 } },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });

  client.close();
});
