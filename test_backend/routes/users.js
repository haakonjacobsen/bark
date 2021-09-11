const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('We are on user');
});

router.get('/specific', (req, res) => {
    res.send('specific user here');
});

module.exports = router;