'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('category',
    'phoneNumber', 
    { 
      type: Sequelize.STRING, 
      allowNull: false, 
      defaultValue: '333-333-3333'
     }
    
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('category', 'phoneNumber');
  }
};
