const router = require('express').Router();
const authRouter = require('./auth.api.router');
const topicRouter = require('./topic.router');



router.use('/auth', authRouter);
router.use('/cards', topicRouter);



module.exports = router;
