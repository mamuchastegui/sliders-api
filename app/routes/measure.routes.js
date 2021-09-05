module.exports = app => {
    const measures = require("../controllers/measure.controller.js");

    var router = require("express").Router();

    // Create a new measure
    router.post("/", measures.create);

    // Retrieve all measures
    router.get("/", measures.findAll);

    // Retrieve all published measures
    router.get("/published", measures.findAllPublished);

    // Retrieve a single measure with id
    router.get("/:id", measures.findOne);

    // Update a measure with id
    router.put("/:id", measures.update);

    // Delete a measure with id
    router.delete("/:id", measures.delete);

    // Create a new measure
    router.delete("/", measures.deleteAll);

    app.use('/api/measures', router);
};