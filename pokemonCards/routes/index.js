var express = require('express');
var router = express.Router();

const controller = require('../controller/index')

/* GET home page. */
router.get('/', controller.index);
/* GET home page. */
router.get('/pokemon/:id', controller.pokemon);



module.exports = router;
