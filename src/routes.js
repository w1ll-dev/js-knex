const express = require("express");
const route = express.Router();
const UsersController = require('./controllers/UsersController')

route.get('/users', UsersController.index);
route.post('/users', UsersController.create);

module.exports = route