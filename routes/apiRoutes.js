const router = require("express").Router();
const db = require("../models");

// Gets workout information
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// Gets workout information for the stats page
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).sort({"day": -1}).limit(7)
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// Posts new workout
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// Updates existing workout
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true, runValidators: true})
  .then(dbWorkout => {
    console.log(dbWorkout)
    res.json(dbWorkout);
  })
  .catch (err => {
    res.json(err);
  });
});

// Deletes a workout
router.delete("/api/workouts", (req, res) => {
  db.Workout.findByIdAndDelete(req.body.id)
  .then(() => {
    res.json(true)
  })
  .catch (err => {
    res.json(err);
  });
});

module.exports = router;