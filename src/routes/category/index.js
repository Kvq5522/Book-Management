'use strict';

const router = require('express').Router();
const { addCategory, editCategory, deleteCategory, searchCategory } = require('../../controllers/category.controller');

router.post('/add', addCategory);

router.post('/edit', editCategory);

router.post('/delete', deleteCategory);

router.post('/search', searchCategory);

module.exports = router;