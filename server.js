const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

require("./app/routes/measure.routes")(app);
jumperRoutes = require("./app/routes/jumper.routes")(app);

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Replace this with the html main page." });
});

/*const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });*/

// set port, listen for requests
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Server is running at http://${host}:${port}.`);
});
