const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user');

// this url handles the creation of expense.
router.post('/create', user_controller.user_create);

// this url gives all the user group info
router.get('/all', user_controller.user_all);

// this url returns the information for a specific expense.
router.get('/:id', user_controller.user_details);

// this url updates the information for a specific expense.
router.put('/:id/update', user_controller.user_update);

// this url deletes the information of a specific expense.
router.delete('/:id/delete', user_controller.user_delete);



module.exports = router;