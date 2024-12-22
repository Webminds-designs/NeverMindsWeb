export default {
  transform: {
    "^.+\\.js$": "babel-jest", // Use Babel for transforming ES modules
  },
  testEnvironment: "node", // Use Node.js environment for testing
};
