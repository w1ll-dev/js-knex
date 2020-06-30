const express = require("express");
const route = express.Router();
const UsersController = require('./controllers/UsersController')

route.get('/users', UsersController.index);
route.post('/users', UsersController.create);
route.put('/users/:id', UsersController.update);

module.exports = route