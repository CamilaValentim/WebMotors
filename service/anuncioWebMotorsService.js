const { AnuncioWebmotors } = require('../models');

const findAll = async () => await AnuncioWebmotors.findAll();

const findById = async (id) => await AnuncioWebmotors.findOne({ where: { id } });

const create = async(id, marca, modelo, versao, ano, quilometragem, observaçao) => { 
    const result = await AnuncioWebmotors.create({id, marca, modelo, versao, ano, quilometragem, observaçao});
    return result;
};

const update = async(id, marca, modelo, versao, ano, quilometragem, observaçao) => {   

   await AnuncioWebmotors.update({marca, modelo, versao, ano, quilometragem, observaçao},
    { where: { id } }); 

    const updateAnuncio = await findById(id)
    return updateAnuncio
};


const destroy = async (id) => {
    const result = await AnuncioWebmotors.destroy( { where: { id } });
    return result;
};


module.exports = {
    findAll,
    findById,
    create,
    update,
    destroy,
};