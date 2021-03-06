const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeadliftSchema = new Schema({

  date: {
    type: Date,
    default: Date.now,
    required: "Date of entry is required"
  },

  weight: {
    type: Number,
    required: "Weight in pounds is required"
  },

  reps: {
    type: Number,
    required: "Number of reps is required"
  },

  sets: {
    type: Number,
    required: "Number of sets is required"
  },

  notes: {
    type: String
  }

});

const Deadlift = mongoose.model('Deadlift', DeadliftSchema);

module.exports = Deadlift;