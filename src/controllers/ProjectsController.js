const knex = require('../database')
module.exports = {
    async index(req, res) {
        const { user_id } = req.query

        const query = knex('projects')

        if (user_id) {
            query
                .where({ user_id })
                .join('users', 'users.id', '=', 'projects.user_id')
                .select('projects.*', 'users.userName')
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