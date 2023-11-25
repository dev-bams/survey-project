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
let User = require('../models/user');

// POST authenticate credentials
router.post('/auth', function(req, res, next) {
    try {
        User.findOne({ email: req.body.email, password: req.body.password })
            .then((data) => { 
                if (data) {
                    req.session.loggedin = true;
                    req.session.savedEmail = req.body.email;
                    req.session.savedPassword = req.body.password;

                    res.send(data);
                }
                else {
                    res.status(401).send('Invalid credentials');
                }
            });
    } catch (exception) {
        res.status(500).send(`Failed to validate credentials: ${exception}`);
    }
});

module.exports =  router;