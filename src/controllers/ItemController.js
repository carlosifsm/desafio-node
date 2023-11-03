const knex = require('../database')

module.exports = {
    async index(req, res, next) { 
        try{
            if(!!req.params.id){
                const { id } = req.params
                const result = await knex('item')
                                    .where({ id })
                                    .first()

                if(!result)throw new Error("Item não existe.");

                return res.json(result)

            }else{
                const results = await knex('item')
                return res.send(results)
            }
        }catch (error) {
            res.send({message:error.message})
            next(error)
        }
    },
    async create(req, res, next) {
        try {
            const { nome, qtd } = req.body
            const fields = ['nome', 'qtd'];
            const valid = fields.reduce((acc, f) => (acc && !!req.body[f]), true);

            if(!valid) throw new Error('Solicitação inválida.')

            await knex('item').insert({
                nome,
                qtd
            })

            return res.status(201).send({message:"Item Criado."})
        } catch (error) {
            res.send({
                message:error.message
              })
            //next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { nome } = req.body
            const { qtd } = req.body
            const { id } = req.params
            
            const item = await knex('item')
                                .where({id})
                                .first()
            
            if(!item)throw new Error("Item não existe.");

            await knex('item')
            .update({ nome })
            .update({ qtd })
            .where({ id })
            
            return res.send({message:"Item Atualizado."})

        } catch (error) {
            res.send({message:error.message})
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params
            const item = await knex('item')
                                .where({id})
                                .first()
            if(!item)throw new Error("Item não existe");

            await knex('item')
                .where({ id })
                .del()

            return res.send({message:"Item Deletado"})
        } catch (error) {
            res.send({message:error.message})
            next(error)
        }
    }
}