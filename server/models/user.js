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

let mongoose = require('mongoose');

// Create a model class
let userModel = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    studentId: Number,
    email: String
},
{ collection: 'users' });

module.exports = mongoose.model('User', userModel);