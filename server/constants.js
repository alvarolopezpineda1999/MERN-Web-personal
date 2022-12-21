const { default: mongoose } = require('mongoose');

const DB_USER = 'admin';
const DB_PASSWORD = 'admin';
const DB_HOST = 'web-personal.5ky9oum.mongodb.net';

const API_VERSION = 'V1';
const IP_SERVER = 'localhost';

const JWT_SECRET_KEY = 'eudb39fh3f893hefuhwufh39f9g3fu934hf89A';

module.exports = {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  API_VERSION,
  IP_SERVER,
  JWT_SECRET_KEY,
};
