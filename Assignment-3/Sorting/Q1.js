const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'mscdb44';

const client = new MongoClient(url);

async function main() {
        await client.connect();
        console.log('Connected to MongoDB server');
        const db = client.db(dbName);
        const collection = db.collection('mongodbCollection');
        const documents = [
            { name: 'Naved', age: 22 },
            { name: 'Poonam', age: 20 },
            { name: 'Arshiya', age: 20 },
            { name: 'Swaroop', age: 28 },
            { name: 'Muiz', age: 25 }
        ];
        await collection.insertMany(documents);
        console.log('Inserted 5 documents into the collection');
        const sortedDocuments = await collection.find().sort({ name: -1 }).toArray();
        console.log('Sorted Documents:');
        sortedDocuments.forEach(doc => {
            console.log(doc);
        });
	const deletionResult = await collection.deleteMany({});
        console.log(`Deleted All Documents`);
        await client.close();
        console.log('Connection Closed');
}

main();

