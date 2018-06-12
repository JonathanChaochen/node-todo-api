const MongoCilent = require('mongodb').MongoClient;
const { ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';

MongoCilent.connect(url, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('connect to MongoDB server');

  const db = client.db('TodoApp');

  //deleteMany
  // db
  //   .collection('Todos')
  //   .deleteMany({ text: 'Eat lunch' })
  //   .then(result => {
  //     console.log(result);
  //   });

  //deleteOne
  // db
  //   .collection('Todos')
  //   .deleteOne({ text: 'Eat lunch' })
  //   .then(result => {
  //     console.log(result);
  //   });

  //findOne and delete
  // db
  //   .collection('Todos')
  //   .findOneAndDelete({ completed: false })
  //   .then(doc => {
  //     console.log(doc);
  //   });

  //  User deteleMany
  // db
  // .collection('Users')
  // .deleteMany({ name: 'Chao' })
  // .then(result => {
  //   console.log(result);
  // });

  db
    .collection('Users')
    .findOneAndDelete(ObjectID('5b1e43fb9fae625ff82389bb'))
    .then(doc => {
      console.log(doc);
    });

  client.close();
});
