const app = require("express")();
const bodyParser = require("body-parser");
const { getLocation } = require("./controllers");

// app.get(getLocation);
app.use(bodyParser.json());

app.post("/", getLocation);

module.exports = app;
