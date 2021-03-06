const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Working serverless-http",
  });
});

app.post("/create", (req, res, next) => {
  return res.status(200).json({
    payload: req.body,
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
