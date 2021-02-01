const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {

    /*LISTAR USUÁRIOS/ENTIDADES NA TABELA*/
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    /** CRIAR USUÁRIO/ENTIDADE NA TABELA */
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        /**GERAR ID AUTO */
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        return response.json({ id });
    }
};