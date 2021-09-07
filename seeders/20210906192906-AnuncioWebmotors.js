'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('AnuncioWebmotors', [
      {    
        marca: "Honda",
        modelo: "City",
        versao: "2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTIC",
        ano: 2018,
        quilometragem:0,
        observaçao: "Azul",

      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('AnuncioWebmotors', null, {});
  }
  
  }

