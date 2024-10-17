'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Cards', [
      {
        question: "1",
        answer: "1",
        topicId: 1,
        value: 100,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_qT-jkhCGg20ldgi1hat4zLz9yy4u_amzGWyP09YOm4YqHgd-ouZsR-fE5k8xfrcTn0&usqp=CAU"
    },
    {
      question: "2",
      answer: "2",
      topicId: 1,
      value: 200,
      image: "https://numarulsaptamanii.ro/gfx/500x500/2.png"
  },

  {
    question: "3",
    answer: "3",
    topicId: 1,
    value: 300,
    image: "https://cdn-icons-png.flaticon.com/512/10323/10323435.png"
},

{
  question: "4",
  answer: "4",
  topicId: 1,
  value: 400,
  image: "https://e7.pngegg.com/pngimages/231/185/png-clipart-logo-black-and-white-brand-number-4-angle-white.png"
},

{
  question: "5",
  answer: "1",
  topicId: 1,
  value: 500,
  image: "https://bakerstore.ru/image/cache/catalog/cutter/8930c_5_9x6-600x600.jpg"
},
{
  question: "1",
  answer: "1",
  topicId: 2,
  value: 100,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_qT-jkhCGg20ldgi1hat4zLz9yy4u_amzGWyP09YOm4YqHgd-ouZsR-fE5k8xfrcTn0&usqp=CAU"
},
{
question: "2",
answer: "2",
topicId: 2,
value: 200,
image: "https://numarulsaptamanii.ro/gfx/500x500/2.png"
},

{
question: "3",
answer: "3",
topicId: 2,
value: 300,
image: "https://cdn-icons-png.flaticon.com/512/10323/10323435.png"
},

{
question: "4",
answer: "4",
topicId: 2,
value: 400,
image: "https://e7.pngegg.com/pngimages/231/185/png-clipart-logo-black-and-white-brand-number-4-angle-white.png"
},

{
question: "5",
answer: "1",
topicId: 2,
value: 500,
image: "https://bakerstore.ru/image/cache/catalog/cutter/8930c_5_9x6-600x600.jpg"
},
{
  question: "1",
  answer: "1",
  topicId: 3,
  value: 100,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_qT-jkhCGg20ldgi1hat4zLz9yy4u_amzGWyP09YOm4YqHgd-ouZsR-fE5k8xfrcTn0&usqp=CAU"
},
{
question: "2",
answer: "2",
topicId: 3,
value: 200,
image: "https://numarulsaptamanii.ro/gfx/500x500/2.png"
},

{
question: "3",
answer: "3",
topicId: 3,
value: 300,
image: "https://cdn-icons-png.flaticon.com/512/10323/10323435.png"
},

{
question: "4",
answer: "4",
topicId: 3,
value: 400,
image: "https://e7.pngegg.com/pngimages/231/185/png-clipart-logo-black-and-white-brand-number-4-angle-white.png"
},

{
question: "5",
answer: "1",
topicId: 3,
value: 500,
image: "https://bakerstore.ru/image/cache/catalog/cutter/8930c_5_9x6-600x600.jpg"
},


    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Cards', null, {});
     
  }
};
