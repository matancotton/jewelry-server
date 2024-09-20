import { ObjectId } from 'mongodb';
import { getDb } from '../../db/connection.js';

export default {
  async getJewelries(_, { _id, price, shape, isLabDiamond }) {
    try {
      const db = await getDb();
      const collection = db.collection('jewelry');

      const query = {};
      if (_id) query._id = new ObjectId(_id);
      if (price) query.price = price;
      if (shape) query.shape = shape;
      if (isLabDiamond !== null) query.isLabDiamond = isLabDiamond;

      const result = await collection.find(query).toArray();
      return result;
    } catch (error) {
      console.error('An error occurred while retrieving jewelry data:', error);
      return { error: 'An error occurred while retrieving jewelry data' };
    }
  },
};
