'use strict';

const router = require('express').Router();
const { getDashboard, getBookPage } = require('../../controllers/render.controller');

router.get('/', getDashboard);

router.get('/book', getBookPage);

module.exports = router;

