const app = require("express")();
const bodyParser = require("body-parser");
const { getLocation } = require("./controllers");

// app.get(getLocation);
app.use(bodyParser.json());
app.get('/', getLocation)


module.exports = app;
