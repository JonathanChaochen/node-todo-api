const MongoCilent = require('mongodb').MongoClient;
const { ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';

MongoCilent.connect(url, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('connect to MongoDB server');

  const db = client.db('TodoApp');

  // db
  //   .collection('Todos')
  //   .find(ObjectID('5b1e3df66819d728da6fb46c'))
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log('Todos');
  //       console.log(JSON.stringify(docs, null, 2));
  //     },
  //     err => {
  //       console.log('Unable to fetch todos', err);
  //     }
  //   );

  // db
  //   .collection('Todos')
  //   .find()
  //   .count()
  //   .then(
  //     count => {
  //       console.log(`Todos count: ${count}`);
  //     },
  //     err => {
  //       console.log('Unable to fetch todos', err);
  //     }
  //   );



  client.close();
});
