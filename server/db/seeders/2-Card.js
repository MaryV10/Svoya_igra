'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Cards',  [  
      {  
          question: "Что такое экосистема?",  
          answer: "Экосистема – это система, состоящая из живых организмов и их неживой среды, взаимодействующих друг с другом.",  
          topicId: 1,  
          value: 100,  
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Ecosystem.jpg/640px-Ecosystem.jpg"  
      },  
      {  
          question: "Какое животное является самым большим на планете?",  
          answer: "Самое большое животное на планете – это голубой кит.",  
          topicId: 1,  
          value: 200,  
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Balaenoptera_musculus_001.jpg/640px-Balaenoptera_musculus_001.jpg"  
      },  
      {  
          question: "Что такое биом?",  
          answer: "Биом – это обширная экосистема, характеризующаяся специфическими климатическими условиями и типами растительности.",  
          topicId: 1,  
          value: 300,  
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Biome_distribution.svg/640px-Biome_distribution.svg.png"  
      },  
      {  
          question: "Почему важно биоразнообразие?",  
          answer: "Биоразнообразие важно для поддержания экосистем, природных ресурсов и устойчивости к изменениям окружающей среды.",  
          topicId: 1,  
          value: 400,  
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Fauna_of_the_world.jpg/640px-Fauna_of_the_world.jpg"  
      },  
      {  
          question: "Каковы основные причины вымирания видов?",  
          answer: "Основные причины вымирания видов включают разрушение среды обитания, изменения климата, загрязнение и охоту.",  
          topicId: 1,  
          value: 500,  
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Extinct_species_2.jpg/640px-Extinct_species_2.jpg"  
      },
      {  
        question: "В каком году был основан Санкт-Петербург?",  
        answer: "Санкт-Петербург был основан в 1703 году.",  
        topicId: 2,  
        value: 100,  
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Sankt-Petersburg%2C_bts.jpg/640px-Sankt-Petersburg%2C_bts.jpg"  
    },  
    {  
        question: "Какой знаменитый мост в Санкт-Петербурге разводят для прохода кораблей?",  
        answer: "В Санкт-Петербурге разводят Дворцовый мост.",  
        topicId: 2,  
        value: 200,  
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Dvortsoviy_bridge_in_the_night.jpg/640px-Dvortsoviy_bridge_in_the_night.jpg"  
    },  
    {  
        question: "Какой знаменитый музей находится в Санкт-Петербурге?",  
        answer: "В Санкт-Петербурге находится Эрмитаж, один из крупнейших музеев искусства и культуры в мире.",  
        topicId: 2,  
        value: 300,  
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hermitage_Museum_2020.jpg/640px-Hermitage_Museum_2020.jpg"  
    },  
    {  
        question: "Какой собор известен своими куполами и находится в Санкт-Петербурге?",  
        answer: "Исаакиевский собор — известный собор с массивными куполами, расположенный в Санкт-Петербурге.",  
        topicId: 2,  
        value: 400,  
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/St._Isaac%27s_Cathedral%2C_Saint_Petersburg_%28cropped%29.jpg/640px-St._Isaac%27s_Cathedral%2C_Saint_Petersburg_%28cropped%29.jpg"  
    },  
    {  
        question: "Какой канал течет через центр Санкт-Петербурга?",  
        answer: "Санкт-Петербург пересекает Невский канал.",  
        topicId: 2,  
        value: 500,  
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Nevsky_Canal_%28Saint_Petersburg%29.jpg/640px-Nevsky_Canal_%28Saint_Petersburg%29.jpg"  
    },
    {  
      question: "Какое самое большое море на Земле?",  
      answer: "Самое большое море на Земле – это Филиппинское море.",  
      topicId: 3,  
      value: 100,  
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Philippine_Sea_map.png/640px-Philippine_Sea_map.png"  
  },  
  {  
      question: "Что такое марины?",  
      answer: "Марины – это подводные экосистемы, состоящие из различных видов морских организмов и их среды обитания.",  
      topicId: 3,  
      value: 200,  
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Coral_reef_0001.JPG/640px-Coral_reef_0001.JPG"  
  },  
  {  
      question: "Какое море отделяет Европу от Азии?",  
      answer: "Каспийское море отделяет Европу от Азии.",  
      topicId: 3,  
      value: 300,  
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Caspian_Sea_map.png/640px-Caspian_Sea_map.png"  
  },  
  {  
      question: "Какие основные виды морских животных?",  
      answer: "Основные виды морских животных включают рыбы, млекопитающие (например, дельфины и киты), моллюски и кораллы.",  
      topicId: 3,  
      value: 400,  
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Fish_tank.jpg/640px-Fish_tank.jpg"  
  },  
  {  
      question: "Какое физическое явление вызывает приливы и отливы в море?",  
      answer: "Приливы и отливы в море вызваны гравитационным воздействием Луны и Солнца.",  
      topicId: 3,  
      value: 500,  
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Tides_diagram.png/640px-Tides_diagram.png"  
  }    
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Cards', null, {});
     
  }
};
