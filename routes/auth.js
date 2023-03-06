const express = require('express');
const router = express.Router();

// @route GET api/auth
// @desc  Get logged on user
// @access Private

router.get('/', (req, res) => {
    res.send('Get logged on user')
});

// @route POST api/auth
// @desc  Auth user & get token
// @access Public

router.post('/', (req, res) => {
    res.send('loog in user')
});

module.exports = router;