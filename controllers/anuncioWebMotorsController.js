const { Router } = require('express');

const anuncioWebMotorsService = require('../service/anuncioWebMotorsService');

const findAll = async (req, res) => {
    const anuncios = await anuncioWebMotorsService.findAll();
    res.status(200).json(anuncios);
};

const create = async (req, res) => {
    const {id, marca, modelo, versao, ano, quilometragem, observaçao } = req.body;
    const anuncio = await anuncioWebMotorsService.create(id, marca, modelo, versao, ano, quilometragem, observaçao);
    res.status(200).json(anuncio);   
};


const update = async (req, res) => {
    const {id, marca, modelo, versao, ano, quilometragem, observaçao } = req.body;

    const result = await anuncioWebMotorsService.update(id, marca, modelo, versao, ano, quilometragem, observaçao);
    return res.status(200).json(result);
};

const destroy = async (req, res) => {
    const { id } = req.body;

    await anuncioWebMotorsService.destroy(id)
    res.status(200).json({message: "Anuncio removido com sucesso"});   
};

module.exports = {
    findAll,
    create,
    update,
    destroy,
};