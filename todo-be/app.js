const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", indexRouter);
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
console.log("mongouri", MONGODB_URI_PROD);
const mongoURI = MONGODB_URI_PROD;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(5000, () => {
  console.log("server on 5000");
});
