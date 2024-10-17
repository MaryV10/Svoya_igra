const router = require('express').Router();
const authRouter = require('./auth.api.router');
const gameRouter = require('./game.router');
const topicRouter = require('./topic.router');



router.use('/auth', authRouter);
router.use('/cards', topicRouter);
router.use('/games', gameRouter);



module.exports = router;
