"use strict";

const router = require('express').Router();

router.get('/', (req, res) => {
    res.redirect('/access/signin');
});

router.use('/access', require('./access/index'));

module.exports = router;