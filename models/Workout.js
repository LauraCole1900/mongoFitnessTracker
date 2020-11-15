const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {type: String, required: "Exercise type is required"},
      name: {type: String, required: "Exercise name is required"},
      duration: {type: Number, required: "Exercise duration is required"},
      weight: {type: Number},
      reps: {type: Number},
      sets: {type: Number},
      distance: {type: Number}
    }]
},
{
  toJSON: {
    virtuals: true
  }
});

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce(function(total, exercise) {
    return total + exercise.duration
  }, 0)
})

const Workout = mongoose.model("Resistance", WorkoutSchema);

module.exports = Workout;