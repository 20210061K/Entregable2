const express = require("express");
const { dirname } = require("path");
const app = express();
const path = require("path");

app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html",require("ejs").renderFile);
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(require("./routes/index"));

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
