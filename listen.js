const app = require("./app.js");

app.listen(9090, error => {
  if (error) console.log(error);
  console.log("listening");
});
