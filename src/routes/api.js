const router = require('express').Router();

router.use('/users', require('./api/users'));
router.use('/posts', require('./api/posts'));

module.exports = router;