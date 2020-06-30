const knex = require('../database/index');
const { update } = require('../database/index');

module.exports = {
    async index(req, res) {
        const results = await knex('users');
        return res.json(results);
    },
    async create(req, res, next) {
        try {
            const { userName } = req.body
            await knex('users').insert({ userName })
            res.status(201).send()
        } catch (error) {
            next(error)
        }

    },
    async update(req, res, next) {
        try {
            const { userName } = req.body
            const { id } = req.params
            
            knex('users').update({ userName }).where({ id })
            return res.send()
        } catch (error) {
            next(error)
        }
    }

}