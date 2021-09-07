const utils = require("../utils/utils");
const db = require("../models");
const JumperMeasure = db.jumperMeasures;
const Jumper = db.jumper;

let lastMeasure = 0;
const jsonResult = utils.makeStruct('isValid code message')

function requestValidations(body) {
    const measure = JumperMeasure(body);
    if (!measure || !measure.measures || measure.measures.length == 0) {
        return new jsonResult(false, 400, "Measures are required");
    }
    return new jsonResult(true, 200, "ok");
}
// Create and Save a new Measure
exports.create = (req, res) => {

    console.log('body: ', req.body);
    let validations  = requestValidations(req.body);
    if (!validations.isValid) {
        return res.status(validations.code).send({
            message: validations.message
        });
    }

    const measure = JumperMeasure(req.body);
    let measures = measure.measures.split(",")
    if (measures[measures.length-1] == "") {
        measures.pop();
    }
    lastMeasure = Math.min(...measures);
    // Create a Measure
    const jumper = new Jumper({
        time: measure.time,
        min: Math.min(...measures),
        max: Math.max(...measures),
        numberOfMeasurements: measures.length,
        measures: measures,
        interval: req.body.interval,
    });
/*
    // Save Measure in the database
    jumper
        .save(jumper)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Measure."
            });
        });*/

    res.status(200).send(jumper);
};

// Retrieve all Measures from the database.
exports.findAll = (req, res) => {
    return res.status(200).send({
        "last_measure": lastMeasure
    });
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
