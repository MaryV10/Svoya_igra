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
        image: "https://avatars.mds.yandex.net/i?id=e971346a5663ce3d05649cf32dcea972e13d3786-3572439-images-thumbs&n=13"  
    },  
    {  
        question: "Почему в Питере много дождей?",  
        answer: "Нева",  
        topicId: 2,  
        value: 200,  
        image: "https://avatars.mds.yandex.net/i?id=6840b81fc7dd49fa0edcfbd1d5de175917f34754-5502412-images-thumbs&n=13"  
    },  
    {  
        question: "Какой знаменитый музей находится в Санкт-Петербурге?",  
        answer: "Эрмитаж",  
        topicId: 2,  
        value: 300,  
        image: "https://avatars.mds.yandex.net/i?id=fc857df6605991de21d4cf5db90c82051aba95ac-4401365-images-thumbs&n=13"  
    },  
    {  
        question: "Какой собор известен своими куполами и находится в Санкт-Петербурге?",  
        answer: "Исаакиевский",  
        topicId: 2,  
        value: 400,  
        image: "https://avatars.mds.yandex.net/i?id=23083d9d1eb6cb090c759f014d3a1555_l-4306623-images-thumbs&n=13"  
    },  
    {  
        question: "Какой канал течет через центр Санкт-Петербурга?",  
        answer: "Грибоедова",  
        topicId: 2,  
        value: 500,  
        image: "https://avatars.mds.yandex.net/i?id=7f8238b7e493982c93991d74f8cb9416c8f1ee98-5885354-images-thumbs&n=13"  
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
      question: "Что важнее таланта??",  
      answer: "Упорство",  
      topicId: 3,  
      value: 300,  
      image: "https://avatars.mds.yandex.net/i?id=445a525b596c188d616e0c4c2b473fcf81d6d729-4499710-images-thumbs&n=13"  
  },  
  {  
      question: "На какого студента третьей фазы похожа эта уточка?",  
      answer: "Дима",  
      topicId: 3,  
      value: 400,  
      image: "https://avatars.mds.yandex.net/get-mpic/5281727/img_id3162085770580284016.jpeg/orig"  
  },  
  {  
      question: "Кто переживает за ваши проекты?",  
      answer: "Юра",  
      topicId: 3,  
      value: 100,  
      image: "https://kartinki.pics/uploads/posts/2022-12/1670465089_16-kartinkin-net-p-kartinki-maika-vazovskogo-krasivo-17.jpg"  
  }    
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Cards', null, {});
     
  }
};
