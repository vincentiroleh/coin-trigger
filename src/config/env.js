require('dotenv/config');

const env = {
    'DB_URL': process.env.CONNECTION_STRING,
    'PORT': process.env.PORT || 8080
}

module.exports = env;