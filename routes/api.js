var express = require('express');
var controller = require('../controllers/api');
var router = express.Router();

router.post('/table/led/on', controller.table_led_on);
router.post('/table/led/off', controller.table_led_off);

module.exports = router;
