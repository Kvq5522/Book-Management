'use strict';

const router = require('express').Router();
const { addAuthor, deleteAuthor, editAuthor, searchAuthor} = require('../../controllers/author.controller')

router.post('/add', addAuthor);

router.post('/edit', editAuthor);

router.post('/delete', deleteAuthor);

router.post('/search', searchAuthor);

module.exports = router;