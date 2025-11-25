const { Schema, model } = require('mongoose');
const HoldingsSchema = new Schema({

    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,


});

modjule.exports = { HoldingsSchema };