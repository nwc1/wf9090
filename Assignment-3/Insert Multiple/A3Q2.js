const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const dbName = 'questions';
const collectionName = 'customers';
const client = new MongoClient(url);
const query = [{'name':'Swaroop', 'age':22},{'name':'Amar', 'age':55},{'name':'Arshiya', 'age':75}];

async function main(){
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.insertMany(query);
    console.log("Inserted Successfully");
    await client.close();
}

main()