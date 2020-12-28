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
router.post(
  '/', 
  [ 
    auth, 
    [
      check('name', 'Name is required').not().isEmpty(),
      check('code', 'Item code is required').not().isEmpty()  
    ] 
  ], 
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, code, quantity, type } = req.body;

    try {
      const newItem = new Item({
        name,
        description,
        code,
        quantity,
        type,
        user: req.user.id
      });
      const item = await newItem.save();
      res.json(item);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

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