import mainController from '../controllers/mainController.js';

const resolver = {
  Query: {
    jewelries: mainController.getJewelries,
  },
};

export default resolver;
