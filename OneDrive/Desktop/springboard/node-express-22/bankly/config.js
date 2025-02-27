/** Shared config for application; can be req'd many places. */

//require('dotenv');
require('dotenv').config() // .env file was not being call

const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';
// there wasn't any .env file

const PORT = +process.env.PORT || 3000;

const BCRYPT_WORK_FACTOR = 10;

const DB_URI =
  process.env.NODE_ENV === 'test'
    ? 'postgresql:///bankly_test'
    : 'postgresql:///bankly';

module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_URI
};
