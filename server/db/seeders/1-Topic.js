'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Topics', [
      {
       name: 'Гарри Поттер',
       
      },
      {
        name: 'Город',
        
       },
       {
        name: 'Рандом',
        
       }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Topics', null, {});
     
  }
};
