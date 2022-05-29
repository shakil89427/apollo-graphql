const User = require("../models/user");

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return await User.find();
    },
  },
  Mutation: {
    addUser: async (parent, args, context, info) => {
      const user = new User(args);
      await user.save();
      return user;
    },
  },
};

module.exports = resolvers;
