'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      
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
          title: "Bootstrap",
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
          title: "Redux",
          description: "", 
          imageURL: "", 
          createdAt: new Date(), 
          updatedAt: new Date()
        }

      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('category', null, {});
  }
};
