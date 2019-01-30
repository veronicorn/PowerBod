const Deadlift = require('../models/Deadlift');

module.exports = function (app) {

  app.get('/api/deadlifts', function (req, res) {
    Deadlift.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/deadlifts', function (req, res) {
    Deadlift.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // app.put('/api/deadlifts/:id', function (req, res) {
  //   Note.findOneAndUpdate({ _id: req.body._id }, { completed: req.body.completed })
  //     .then(function (data) {
  //       res.json(data);
  //     })
  //     .catch(function (err) {
  //       res.json(err);
  //     });
  // });

  // app.delete('/api/notes/:id', function (req, res) {
  //   Deadlift.findOneAndDelete(req.params.id)
  //     .then(data => res.json({ success: true }))
  //     .catch(err => res.json(err))
  // })
}