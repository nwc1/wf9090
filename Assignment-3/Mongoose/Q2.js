const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
	name: String,
	age: Number
});

const studentModel = mongoose.model('studentcollection', studentSchema);

async function connectToDB() {
	await mongoose.connect('mongodb://localhost:27017/mscdb44');
    	console.log('Connected to MongoDB');
}

async function insertDocument() {
    	const doc = new studentModel({ name: 'Naved', age: 20 });
    	await doc.save();
    	console.log('Document inserted successfully');
}

async function selectData() {
    	const result = await studentModel.find({});
    	console.log('Selected data:', result);
}

async function updateData() {
    	await studentModel.updateOne({ name: 'Naved' }, { age: 31 });
    	console.log('Data updated successfully');
}

async function closeConnection() {
    	await mongoose.connection.close();
    	console.log('Connection closed');
}

async function main() {
  	await connectToDB();
  	await insertDocument();
  	await selectData();
  	await updateData();
  	await selectData();
  	await closeConnection();
}

main();

