const Deadlift = require('../models/Deadlift');
const FrontSquat = require('../models/FrontSquat');
const mongoose = require('mongoose');

module.exports = function (app) {

  /*DEADLIFTS*/
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

  app.delete('/api/deadlifts/:id', function (req, res) {
    Deadlift.deleteOne({ '_id': mongoose.Types.ObjectId(req.params.id) })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  /*FRONT SQUATS*/
  app.get('/api/frontsquats', function (req, res) {
    FrontSquat.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.post('/api/frontsquats', function (req, res) {
    FrontSquat.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.delete('/api/frontsquats/:id', function (req, res) {
    FrontSquat.deleteOne({ '_id': mongoose.Types.ObjectId(req.params.id) })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
}