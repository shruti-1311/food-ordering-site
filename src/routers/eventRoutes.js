
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authenticate = require('../middleware/authenticate');



router.get('', eventController.findAllEvents);


module.exports = router;