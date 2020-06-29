const express = require("express");
const route = express.Router();
const UsersController = require('./controllers/UsersController')

route.get('/getUsers', UsersController.index);

module.exports = route