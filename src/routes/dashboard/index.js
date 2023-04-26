'use strict';

const router = require('express').Router();
const { getDashboard, getBookPage, getCategoryPage } = require('../../controllers/render.controller');

router.get('/', getDashboard);

router.get('/book', getBookPage);

router.get('/category', getCategoryPage);

module.exports = router;

