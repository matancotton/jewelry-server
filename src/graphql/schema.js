const typeDefs = `#graphql

  type Jewelry {
    _id: ID
    price: Int
    shape: String
    color: String
    clarity: String
    carat: Float
    isLabDiamond: Boolean
    cut: String
  }

  type Query {
    jewelries(_id: ID, price: Int, shape: String, isLabDiamond: Boolean): [Jewelry]
  }
`;

export default typeDefs;
