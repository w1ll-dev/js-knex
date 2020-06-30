const knex = require('../database')
module.exports = {
    async index(req, res) {
        const { user_id } = req.params

        const query = knex('projects')

        if (user_id) {
            query.where({ user_id })
        }

        const results = await query

        return res.json(results)
    },

    async create(req, res, next) {
        try {
            const { projectName, user_id } = req.body
            await knex('projects').insert({ projectName, user_id })
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    }
}