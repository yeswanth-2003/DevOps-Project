const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String, 
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: Date, 
    required: true,
  },
  otp: {
    type: Number,
    required: false, 
  },
});

module.exports = mongoose.model('booking', bookingSchema);
