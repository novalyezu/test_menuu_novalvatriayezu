const express = require("express");
const app = express();
const routes = require("./routes/routes");

app.use("/", routes);

app.listen(8181, function(res) {
  console.log("Run at port 8181");
});
