const dbConfig = require("../infrastructure/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./measure.model.js")(mongoose);

module.exports = db;
