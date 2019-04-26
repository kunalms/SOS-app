const express = require('express');
const router = express.Router();

const sms_controller = require('../controllers/sms');

// this url handles the creation of expense.
router.get('/', sms_controller.single_sms);



module.exports = router;