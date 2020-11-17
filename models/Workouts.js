const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    // Assigns current date to posting workout
    type: Date,
    default: () => new Date()
  },
  // Exercise information
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

// Totals workout durations for cumulative information
WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce(function(total, exercise) {
    return total + exercise.duration
  }, 0)
})

const Workout = mongoose.model("Exercise", WorkoutSchema);

module.exports = Workout;