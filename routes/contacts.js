const express = require('express');
const router = express.Router();

// @route GET api/contacts
// @desc  Get all user contacts
// @access private

router.get('/', (req, res) => {
    res.send('Get all contacts')
});

// @route POST api/contacts
// @desc  Add new contact
// @access Public

router.post('/', (req, res) => {
    res.send('Add contacts')
});

// @route POST api/contacts:id
// @desc  Update contacts
// @access Public

router.post('/:id', (req, res) => {
    res.send('Update contact')
});

// @route DELETE api/contacts:id
// @desc  Delete contacts
// @access Public

router.post('/:id', (req, res) => {
    res.send('Delete contact')
});


module.exports = router;