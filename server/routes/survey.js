/**
 * Centennial College
 * Web Application Development - COMP229 / Section 004
 * 
 * Group Project - Survey Website
 * 
 * Team:
 *  - Carlos Gama       (301257092) / Project Manager
 *  - Idris Mustapha    (301207535) / Back-end Developer
 *  - Jinsung Park      (301241866) / Front-end Developer
 *  - Nabin Dotel       (301281044) / Front-end Developer
 *  - Shristi Prasai    (301310100) / Front-end Developer
 *  - Khaleed Opeloyeru (301286462) / Product Owner
 */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Survey = require('../models/survey');

// GET route for displaying all surveys
router.get('/', function(req, res, next) {
  try {
    Survey.find()
            .sort({ _id: 1 })
            .then((data) => {
              if (data) {
                res.send(data);
              }
              else {
                res.status(404).end();
              }
            });
  } catch (exception) {
    res.status(500).send(`Failed to list surveys: ${exception}`);
  }
});

// GET route for survey results
router.get('/results/:id', function(req, res, next) {
  try {
    Survey.findOne({ _id: req.params.id })
            .sort({ _id: 1 })
            .then((data) => {
              if (data) {
                res.send(data);
              }
              else {
                res.status(404).end();
              }
            });
  } catch (exception) {
    res.status(500).send(`Failed to list surveys: ${exception}`);
  }
});

// GET route for displaying a survey
router.get('/edit/:id', function(req, res, next) {
  try {
    Survey.findOne({ _id: req.params.id })
            .then((data) => {
              if (data) {
                res.send(data);
              }
              else {
                res.status(500).send(`Trying to edit a survey that doesn't exist: id=[${req.body.id}]`);
              }
            });
  } catch (exception) {
    res.status(500).send(`Failed to find the survey by id=[${req.body.id}]: ${exception}`);
  }
});

// POST route for edit a survey
router.post('/edit', function(req, res, next) {
  let updatedSurvey = Survey({
    "title": req.body.title,
    "questions": req.body.questions
  });

  Survey.findOneAndUpdate({ _id: req.body.id }, updatedSurvey )
          .then((data) => {
            if (data) {
              res.send(data);
            }
            else {
              res.status(500).send(`Failed to update the survey: id=[${req.body.id}]`);
            }
          });
});

// POST route for create a survey
router.post('/create', function(req, res, next) {

  Survey.insertOne({ title: req.body.title, questions: res.body.questions })
          .then((data) => {
            if (data) {
              res.send(data);
            }
            else {
              res.status(500).send(`Failed to create the survey: title=[${req.body.title}]`);
            }
          });
});

// GET route to delete a survey
router.get('/delete/:id', function(req, res, next) {
  Survey.deleteOne({ _id: req.params.id })
          .then((data) => {
            if (data) {
              res.send(data);
            }
            else {
              res.status(500).send(`Failed to delete the survey: id=[${req.body.id}]`);
            }
          });
});

module.exports = router;