const {model} = require('mongoose');
const { PositionsSchema } = require('../schemas/PositionsSchema');

const {PositionsSchema} = require('../schemas/PositionsSchema');

const Positionmodel  = new model('position',PositionsSchema);

module.exports = {Positionmodel };