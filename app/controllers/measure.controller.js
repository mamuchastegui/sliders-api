const db = require("../models");
var validator = require('validator');

const Measure = db.measures;

function requestValidations(body) {
    const measure = Measure(body);
    if (!validator.isDate(measure.time)) {
        return false
    }
    return true
}
// Create and Save a new Measure
exports.create = (req, res) => {

    console.log('body: ', req.body);
    // Validate request
    if (!req.body.time) {
        res.status(400).send({message: "Time can not be empty!"});
        return;
    }
    requestValidations(req.body)
    // Create a Measure
    const measure = new Measure({
        time: req.body.time,
        interval: req.body.interval,
        foot: req.body.foot,
        temperature: req.body.temperature,
        accelerometer: req.body.accelerometer,
        gyroscope: [gyroscope],
    });

    // Save Measure in the database
    measure
        .save(measure)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Measure."
            });
        });
};

// Retrieve all Measures from the database.
exports.findAll = (req, res) => {

};

// Find a single Measure with an id
exports.findOne = (req, res) => {

};

// Update a Measure by the id in the request
exports.update = (req, res) => {

};

// Delete a Measure with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Measures from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Measures
exports.findAllPublished = (req, res) => {

};
