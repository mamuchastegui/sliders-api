module.exports = app => {
    const jumper = require("../controllers/jumper.controller.js");

    var router = require("express").Router();

    // Create a new jumper measure
    router.post("/", jumper.create);

    // Retrieve all jumper
    router.get("/", jumper.findAll);

    // Retrieve all published jumper
    router.get("/published", jumper.findAllPublished);

    // Retrieve a single jumper measure with id
    router.get("/:id", jumper.findOne);

    // Update a jumper measure with id
    router.put("/:id", jumper.update);

    // Delete a jumper measure with id
    router.delete("/:id", jumper.delete);

    // Create a new jumper measure
    router.delete("/", jumper.deleteAll);

    app.use('/api/jumper', router);
};