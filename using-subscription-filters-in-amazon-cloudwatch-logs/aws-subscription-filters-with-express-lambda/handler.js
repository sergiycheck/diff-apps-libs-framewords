const serverless = require("serverless-http");
const express = require("express");
const { gunzip } = require("node:zlib");
const zlib = require("node:zlib");
const { promisify } = require("node:util");
const compression = require("compression");

const app = express();

app.use(express.json());
app.use(compression());

const do_unzip = promisify(gunzip);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "working lambda express",
  });
});

app.post("/unzip", async (req, res, next) => {
  const isAccepted = req.headers["content-type"] === "application/gzip";
  if (!isAccepted) return res.status(406).json({ message: "Not Acceptable" });

  const data = [];
  req.addListener("data", (chunk) => {
    data.push(Buffer.from(chunk));
  });
  req.addListener("end", async () => {
    const buff = Buffer.concat(data);
    try {
      const buffRes = await do_unzip(buff, {
        finishFlush: zlib.constants.Z_SYNC_FLUSH,
      });
      const result = buffRes.toString();

      return res.status(200).json({
        result,
      });
    } catch (error) {
      next(error);
    }
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).json({
    error: err,
    message: err.message,
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
