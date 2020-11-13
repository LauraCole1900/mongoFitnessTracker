const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
  title: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;