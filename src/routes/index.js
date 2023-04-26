"use strict";

const router = require('express').Router();

router.get('/', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/access/signin');
    }

    res.redirect('/dashboard');
});

router.use('/access', require('./access/index'));

router.use('/dashboard', require('./dashboard/index'));

module.exports = router;