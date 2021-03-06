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
    const items = await Item.find({ Item }).sort({ date: -1 });
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
router.put('/:id', auth, async (req, res) => {
  const { name, description, code, quantity, type } = req.body;

  //Build item object
  const itemFields = {};
  if(name) itemFields.name = name;
  if(description) itemFields.description = description;
  if(code) itemFields.code = code;
  if(quantity) itemFields.quantity = quantity;
  if(type) itemFields.type = type;

  try {
    let item = await Item.findById(req.params.id);
    if(!item) return res.status(404).json({ msg: 'Item not found' });

    item = await Item.findByIdAndUpdate(req.params.id,
      { $set: itemFields },
      { new: true }
    );
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/items/:id
// @desc      Delete item
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let item = await Item.findById(req.params.id);
    if(!item) return res.status(404).json({ msg: 'Item not found' });

    await Item.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Item removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;