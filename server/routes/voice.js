const express = require('express');
const router = express.Router();

const voice_controller = require('../controllers/voice');


router.post('/', voice_controller.click_to_call);

router.get('/info', voice_controller.click_to_call_info);



module.exports = router;