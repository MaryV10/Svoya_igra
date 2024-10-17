const { getTopicController } = require('../controllers/topicController');


const topicRouter = require('express').Router();


topicRouter.get('/', getTopicController);


module.exports = topicRouter;