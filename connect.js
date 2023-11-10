const MongoClient = require('mongodb').MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

async function run() {
  try {
    const database = client.db("WizCommunity");
    const stud = database.collection("stud");
    // create a document to insert
    const doc = [
          {
            _id : 2,
            name : "Cindy Hose",
            house : "Hufflepuff",
            year : 7
          },
          {
            _id : 3,
            name : "Maz Gohan",
            house : "Slytherin",
            year : 2
          }
    ]
    const options = { ordered: true };

    const result = await stud.insertMany(doc,options);

    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
