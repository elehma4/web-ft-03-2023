'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('category', [
      {
        title: "JS",
        description: "", 
        imageURL: "", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        title: "Node",
        description: "", 
        imageURL: "", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        title: "Tailwind CSS",
        description: "", 
        imageURL: "", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        title: "React",
        description: "", 
        imageURL: "", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        title: "Express",
        description: "", 
        imageURL: "", 
        createdAt: new Date(), 
        updatedAt: new Date()
      }

    ], {});

  },

  async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('category', null, {});

  }
};
