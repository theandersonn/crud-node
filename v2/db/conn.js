const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/quotes';

const client = new MongoClient(uri);

const run = async  () => {
  try {
    await client.connect();
    console.log('Conectado ao mongoDB!');
  } catch (error) {
    console.log(error);
  }
};

run();

module.exports = client;

