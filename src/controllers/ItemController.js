const knex = require('../database')

module.exports = {
    async index(req, res) { 
        const results = await knex('item')

        return res.json(results)
    },
    async create(req, res, next) {
        try {
            const { nome, validade } = req.body

            await knex('item').insert({
                nome,
                validade
            })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { nome } = req.body
            const { validade } = req.body
            const { id } = req.params
            
            
            await knex('item')
            .update({ nome })
            .update({ validade })
            .where({ id })

            return res.send()

        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('item')
            .where({ id })
            .del()
            

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}