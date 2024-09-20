import { getDb } from './connection.js';
import fs from 'fs';

const collectionName = 'jewelry';

const importData = async () => {
  try {
    const db = await getDb();
    const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8')); // Load from a file
    const collection = db.collection(collectionName);

    // Insert the JSON data into the collection
    const result = await collection.insertMany(jsonData);

    console.log(`${result.insertedCount} documents were inserted.`);
  } catch (error) {
    console.error('An error occurred while importing data:', error);
  } finally {
  }
};

export default importData;
