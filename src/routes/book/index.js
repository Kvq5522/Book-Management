'use strict';

const router = require('express').Router();

router.post('/add', (req, res) => {
    res.send('Add book');
});

router.post('/edit', (req, res) => {
    res.send('Edit book');
});

router.post('/delete', (req, res) => {
    res.send('Delete book');
});

module.exports = router;