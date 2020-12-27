const mongoose = require('mongoose');

const ItemsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  code: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    default: 'product'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('items', ItemsSchema);