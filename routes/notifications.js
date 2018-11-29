const express = require('express');
const router = express.Router();

router.post('/', function(req, res) {
    const token = req.body.token;
});

module.exports = router;
