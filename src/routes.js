const express = require("express");
const route = express.Router();
const UsersController = require('./controllers/UsersController')

route.get('/users', UsersController.index);
route.post('/users', UsersController.create);
route.put('/users/:id', UsersController.update);
route.delete('/users/:id', UsersController.delete);

module.exports = route