import { getDb } from './connection.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const collectionName = 'jewelry';

const dataFilePath = path.join(__dirname, 'data.json');

const importData = async () => {
  try {
    const db = await getDb();
    const jsonData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8')); // Load from a file
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
