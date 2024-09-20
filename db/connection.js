import { MongoClient } from 'mongodb';
// MongoDB Connection URL
const url = 'mongodb://mongodb:27017';
const dbName = 'assignment';

let db;

async function connectToDatabase() {
  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

export const getDb = () => db;

export default connectToDatabase;
