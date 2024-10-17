const router = require('express').Router();
const authRouter = require('./auth.api.router');
const topicRouter = require('./topic.router');
const tokenRouter= require('./token.api.router');



router.use('/auth', authRouter);
router.use('/cards', topicRouter);
router.use('/tokens', tokenRouter);



module.exports = router;
