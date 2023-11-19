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
let mongoose = require('mongoose');

// Create a model class
let surveyModel = mongoose.Schema({
    title: String,
    questions: [
        {
            questionType: Number, // 0: shortText, 1: longText, 2: checkBoxes, 3: multipleChoices
            questionText: String,
            options: [String],
        }
    ]
},
{ collection: 'surveys' });

module.exports = mongoose.model('Survey', surveyModel);