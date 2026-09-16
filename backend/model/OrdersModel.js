const {model} = require('mongoose');

const {OrdersSchema} = require('../schemas/OrdersSchema');

const OrderModel = new model('order', OrdersSchema);

module.exports = {OrderModel};