const express = require('express');

const router = express.Router();

const controllers = require('../controllers/index');

router.post('/', controllers.userLogin);

module.exports = router;
