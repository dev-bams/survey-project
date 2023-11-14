/**
 * Centennial College
 * Web Application Development - COMP229 / Section 004
 * 
 * Group Project - Survey Website
 * 
 * Team:
 *  - Carlos Gama    (301257092) / Project Manager
 *  - Idris Mustapha (301207535) / Back-end Developer
 *  - Jinsung Park   (301241866) / Front-end Developer
 *  - Nabin Dotel    (301281044) / Front-end Developer
 *  - Shristi Prasai (301310100) / Front-end Developer
 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Contact = require('../models/contact');

const TITLE = 'Contacts';
const MSG_NO_CONTACTS = "Your list is empty.";
const MSG_EXCEPTION = 'Page under maintenance, please come back later.';

// GET contacts page
router.get('/', function(req, res, next) {

  if (!req.session.loggedin) {
    res.redirect('/login');
  }

  try {
    Contact.find()
            .sort({ name: 1 })
            .then((data) => {
              if (data) {
                res.render('contacts', { title: TITLE, contacts: data });
              }
              else {
                req.session.message = MSG_NO_CONTACTS;
                res.render('/contacts', { title: TITLE });
              }
            });
  } catch (exception) {
    console.error(`Failed to list contacts: ${exception}`);

    req.session.message = MSG_EXCEPTION;
    res.status(500).redirect('/contacts');
  }
});

// GET route for displaying the edit page
router.get('/edit/:id', function(req, res, next) {
  try {
    Contact.findOne({ _id: req.params.id })
            .then((data) => {
              if (data) {
                res.locals.contactToEdit = data;
                res.render('contact-edit', { title: TITLE });
              }
              else {
                console.error(`Trying to edit a contact that doesn't exist: id=[${req.body.id}]`);

                req.session.message = MSG_EXCEPTION;
                res.status(500).redirect('/contacts');
              }
            });
  } catch (exception) {
    console.error(`Failed to find the contact by id=[${req.body.id}]: ${exception}`);

    req.session.message = MSG_EXCEPTION;
    res.status(500).redirect('/contacts');
  }
});

// POST route for edit a contact
router.post('/edit', function(req, res, next) {

  let updatedContact = Contact({
    "_id": req.body.id,
    "name": req.body.name,
    "number": req.body.number,
    "email": req.body.email
  });

  Contact.findOneAndUpdate({ _id: req.body.id }, updatedContact )
          .then((result) => {
            if (result) {
              res.redirect('/contacts');
            }
            else {
              console.error(`Failed to update the contact: id=[${req.body.id}]`);

              req.session.message = MSG_EXCEPTION;
              res.status(500).redirect('/contacts');
            }
          });
});

// GET route to perform deletion
router.get('/delete/:id', function(req, res, next) {
  Contact.deleteOne({ _id: req.params.id })
          .then((result) => {
            if (result) {
              res.redirect('/contacts');
            }
            else {
              console.error(`Failed to delete the contact: id=[${req.body.id}]`);

              req.session.message = MSG_EXCEPTION;
              res.status(500).redirect('/contacts');
            }
          });
});

module.exports = router;