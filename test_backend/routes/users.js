const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/', (req, res) => {
    res.send('We are on user');
});

router.get('/specific', (req, res) => {
    res.send('specific user here');
});

module.exports = router;