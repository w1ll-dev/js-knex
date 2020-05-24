const knexFile = require('../../knexfile');
const knex = require('knex')(knex.development);

module.exports = knex.development;