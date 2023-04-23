const router = require('express').Router();
const { signIn, signOut, sendRecoveryEmail, recoverPassword } = require('../../controllers/access.controller');

router.post('/signin', signIn);

router.post('/signout', signOut);

router.post('/forget-password', sendRecoveryEmail);

router.post('/reset-password/:id', recoverPassword);

module.exports = router;