const {
  PORT = 3000,
  DB_ADDRESS = 'mongodb://localhost:27017/authdemo',
  JWT_SECRET = 'jwtsecret',
} = process.env;

module.exports = {
  PORT,
  DB_ADDRESS,
  JWT_SECRET,
};
