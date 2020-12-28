const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
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
    required: true,    
    unique: true
  },
  quantity: {
    type: Number,
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

module.exports = mongoose.model('item', ItemSchema);