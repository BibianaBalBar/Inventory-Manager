const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { validationResult, check } = require('express-validator/check')

const User = require('../models/User');
const Item = require('../models/Items');

// @route     GET api/items
// @desc      Get all items
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const items = await Item.find({ user: req.user.id }).sort({ date: -1 });
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/items
// @desc      Add new item
// @access    Private
router.post('/', (req, res) => {
  res.send('Add new item');
});

// @route     PUT api/items/:id
// @desc      Update item
// @access    Private
router.put('/:id', (req, res) => {
  res.send('Update item');
});

// @route     DELETE api/items/:id
// @desc      Delete item
// @access    Private
router.delete('/:id', (req, res) => {
  res.send('Delete item');
});

module.exports = router;