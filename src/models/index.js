const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const coinSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Field is required']
    },
    coin_symbol: {
        type: String,
        required: [true, 'Field is required']
    },
    coin_link: {
        type: String,
        required: [true, 'Field is required']
    },
    price: {
        type: String,
        required: [true, 'Field is required']
    },
    _1h: {
        type: String,
        required: [true, 'Field is required']
    },
    _24h: {
        type: String,
        required: [true, 'Field is required']
    },
    volume: {
        type: String,
        required: [true, 'Field is required']
    },
    blockchain: {
        type: String,
        required: [true, 'Field is required']
    },
    added: {
        type: String,
        required: [true, 'Field is required']
    }
});

const Coins = model('Coins', coinSchema);
module.exports = Coins;
