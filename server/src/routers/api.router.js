const router = require('express').Router();
const authRouter = require('./auth.api.router');
const gameRouter = require('./game.router');
const topicRouter = require('./topic.router');
const tokenRouter= require('./token.api.router');
const questRouter = require('./quest.api');



router.use('/auth', authRouter);
router.use('/topics', topicRouter);

router.use('/tokens', tokenRouter);

router.use('/games', gameRouter);

router.use('/quests', questRouter)



module.exports = router;
