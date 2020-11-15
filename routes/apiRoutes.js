const router = require("express").Router();
const db = require("./models");

// existing api routes
// ("/api/workouts")
// ("/api/workouts/" + id,
// (`/api/workouts/range`)

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true, runValidators: true})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch (err => {
    res.json(err);
  });
});

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