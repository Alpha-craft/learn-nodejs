'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      kelas: {
        type: Sequelize.STRING
      },
      absen: {
        type: Sequelize.INTEGER
      },
      roleId:{
        allowNull:true,
        type:Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addColumn('roleId',{type:Sequelize.INTEGER})
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};