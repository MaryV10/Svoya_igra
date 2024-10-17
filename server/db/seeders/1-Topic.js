'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Topics', [
      {
       name: 'Природа',
       
      },
      {
        name: 'Город',
        
       },
       {
        name: 'Море',
        
       }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Topics', null, {});
     
  }
};
