const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./router");
const PORT = 8000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json());
app.set("views", "views");
app.set("view engine", "ejs");

app.use("/", router);

app.listen(PORT, () => {
  console.log(`The server now is runing in port ${PORT}`);
});
