const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  amount: {
    type: String,
    required: true,
  },
  paymentStatus: String, // To track the status of the payment (e.g., 'succeeded', 'failed')
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
