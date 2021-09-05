const dbConfig = require("../infrastructure/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.measures = require("./measure.model.js")(mongoose);
db.jumperMeasures = require("./jumperMeasure.model")(mongoose);
db.jumper = require("./jumper.model")(mongoose);

module.exports = db;
