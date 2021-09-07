'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AnuncioWebmotors', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true,
        allowNull: false,
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      versao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      quilometragem: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      observaçao: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AnuncioWebmotors');
  }
};
