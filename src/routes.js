const express = require("express");
const route = express.Router();

const UsersController = require('./controllers/UsersController')
const ProjectsController = require('./controllers/ProjectsController')

route
    // users routes
    .get('/users', UsersController.index)
    .post('/users', UsersController.create)
    .put('/users/:id', UsersController.update)
    .delete('/users/:id', UsersController.delete)

    // projects routes
    .get('/projects/', ProjectsController.index)
    .post('/projects', ProjectsController.create)
     
module.exports = route