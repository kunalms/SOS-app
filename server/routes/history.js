const express = require('express');
const router = express.Router();

const history_controller = require('../controllers/history');

// this url handles the creation of expense.
router.get('/all', history_controller.fetch_all);

module.exports = router;