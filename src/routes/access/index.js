const router = require('express').Router();
const { signIn } = require('../../controllers/access.controller');

router.post('/signin', signIn);

module.exports = router;