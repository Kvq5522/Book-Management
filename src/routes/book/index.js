'use strict';

const router = require('express').Router();
const { addBook } = require('../../controllers/book.controller');

router.post('/add', addBook);

router.post('/edit', (req, res) => {
    res.send('Edit book');
});

router.post('/delete', (req, res) => {
    res.send('Delete book');
});

module.exports = router;