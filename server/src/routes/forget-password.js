const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.status(201).json({
        message: 'email confirmation sent'
    })
});

module.exports = router;
