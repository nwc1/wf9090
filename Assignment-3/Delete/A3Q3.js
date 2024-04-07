const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017/';
const dbName = 'questions';
const collectionName = 'customers';
const client = new MongoClient(url);
const query = {'name' : 'Arshiya'};

async function main(){
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const docs = await collection.deleteOne(query);
    const result = await collection.find({}).toArray();
    console.log(result);
    await client.close();
}

main()