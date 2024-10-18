'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Cards',  [  
      {  
          question: "Что за животное - питомец Хагрида, Клювокрыл?",  
          answer: "Гиппогриф",  
          topicId: 1,  
          value: 100,  
          image: "https://avatars.mds.yandex.net/get-entity_search/10105370/984396236/S600xU_2x"  
      },  
      {  
          question: "Слезы какого животного являются единственным известным противоядием от яда василиска?",  
          answer: "Феникс",  
          topicId: 1,  
          value: 200,  
          image: "https://avatars.mds.yandex.net/i?id=603b6d6390777f1b689448061f3e206b_l-4568203-images-thumbs&n=13"  
      },  
      {  
          question: "Как зовут гигантского паука, который чуть не убил Гарри, Рона и Клыка в Запретном лесу?",  
          answer: "Арагог",  
          topicId: 1,  
          value: 300,  
          image: "https://avatars.mds.yandex.net/get-entity_search/4740766/978870532/orig"  
      },  
      {  
          question: "Как звали домового эльфа семьи Блэк?",  
          answer: "Добби",  
          topicId: 1,  
          value: 400,  
          image: "https://avatars.mds.yandex.net/i?id=733f164d806c5efa9eee0169099333a2_l-5886829-images-thumbs&n=13"  
      },  
      {  
          question: "Как зовут трехголового пса Хагрида, охраняющего Философский камень?",  
          answer: "Пушок",  
          topicId: 1,  
          value: 500,  
          image: "https://m.media-amazon.com/images/M/MV5BMGFmMjczM2YtZTI3Yi00ZTFmLTgxNDAtMTdkOWZkMjVhYzlmXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_FMjpg_UX1000_.jpg"  
      },
      {  
        question: "В каком году был основан Санкт-Петербург?",  
        answer: "1703",  
        topicId: 2,  
        value: 100,  
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Sankt-Petersburg%2C_bts.jpg/640px-Sankt-Petersburg%2C_bts.jpg"  
    },  
    {  
        question: "Почему в Питере много дождей?",  
        answer: "Нева",  
        topicId: 2,  
        value: 200,  
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Dvortsoviy_bridge_in_the_night.jpg/640px-Dvortsoviy_bridge_in_the_night.jpg"  
    },  
    {  
        question: "Какой знаменитый музей находится в Санкт-Петербурге?",  
        answer: "Эрмитаж",  
        topicId: 2,  
        value: 300,  
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hermitage_Museum_2020.jpg/640px-Hermitage_Museum_2020.jpg"  
    },  
    {  
        question: "Какой собор известен своими куполами и находится в Санкт-Петербурге?",  
        answer: "Исаакиевский",  
        topicId: 2,  
        value: 400,  
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/St._Isaac%27s_Cathedral%2C_Saint_Petersburg_%28cropped%29.jpg/640px-St._Isaac%27s_Cathedral%2C_Saint_Petersburg_%28cropped%29.jpg"  
    },  
    {  
        question: "Какой канал течет через центр Санкт-Петербурга?",  
        answer: "Грибоедова",  
        topicId: 2,  
        value: 500,  
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Nevsky_Canal_%28Saint_Petersburg%29.jpg/640px-Nevsky_Canal_%28Saint_Petersburg%29.jpg"  
    },
    {  
      question: "Самая высокая горная вершина России и Европы?",  
      answer: "Эльбрус",  
      topicId: 3,  
      value: 500,  
      image: "https://qp-storage.media.mts.ru/mts_media/images/materials/Elbrus_921.jpg"  
  },  
  {  
      question: "Какие цвет получится, если смешать желтый и синий?",  
      answer: "Зеленый",  
      topicId: 3,  
      value: 200,  
      image: "https://avatars.mds.yandex.net/i?id=3b271dba1e5667fcb2d4a814ac3cee49188e2634-10697630-images-thumbs&n=13"  
  },  
  {  
      question: "Из окна какого помещается открывается этот вид?",  
      answer: "Typescript",  
      topicId: 3,  
      value: 300,  
      image: "blob:https://web.telegram.org/2105ca92-19c6-4e03-b853-345d9b556e7f"  
  },  
  {  
      question: "На какого студента третьей фазы похожа эта уточка (по стилю)?",  
      answer: "Дима",  
      topicId: 3,  
      value: 400,  
      image: "blob:https://web.telegram.org/cb919f0e-9693-4f25-92c6-bbcef02cdefb"  
  },  
  {  
      question: "Какая фаза имеет допуск к использованию данного оружия?",  
      answer: "3",  
      topicId: 3,  
      value: 100,  
      image: "blob:https://web.telegram.org/554f4b32-a483-4ac6-a9e4-b5d87a69d0a5"  
  }    
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Cards', null, {});
     
  }
};
