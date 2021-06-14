const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const coinSchema = new Schema({
    name: {
        type: String,

    },
    coin_symbol: {
        type: String,

    },
    coin_link: {
        type: String,

    },
    price: {
        type: String,

    },
    _1h: {
        type: String,

    },
    _24h: {
        type: String,

    },
    volume: {
        type: String,

    },
    blockchain: {
        type: String,

    },
    added: {
        type: String,

    }
});

const Coins = model('Coins', coinSchema);
module.exports = Coins;
