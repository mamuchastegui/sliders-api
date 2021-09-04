const db = require("../models");
const Measure = db.measures;

// Create and Save a new Measure
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

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
