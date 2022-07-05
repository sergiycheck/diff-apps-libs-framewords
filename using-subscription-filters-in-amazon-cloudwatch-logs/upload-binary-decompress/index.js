const express = require("express");
const { unzip } = require("node:zlib");
const zlib = require("node:zlib");
const { promisify } = require("node:util");
const compression = require("compression");
const http = require("http");

const app = express();
const port = process.env.PORT || 5002;

app.use(express.json());
app.use(compression());

const do_unzip = promisify(unzip);

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
      const buffRes = await do_unzip(buff);
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
  return res.status(500).json({
    error: err,
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

const server = http.createServer(app).listen(port, () => {
  const addressInfo = server.address();
  console.log(`Listening on port ${addressInfo.port}`);
});
