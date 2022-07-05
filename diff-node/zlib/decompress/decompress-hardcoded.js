const { deflate, unzip } = require("node:zlib");

const input = ".................................";
deflate(input, (err, buffer) => {
  if (err) {
    console.error("An error occurred:", err);
    process.exitCode = 1;
  }
  console.log(`buffer.toString("base64")`, buffer.toString("base64"));
});

const buffer = Buffer.from("eJzT0yMAAGTvBe8=", "base64");
unzip(buffer, (err, buffer) => {
  if (err) {
    console.error("An error occurred:", err);
    process.exitCode = 1;
  }
  console.log(`buffer.toString()`, buffer.toString());
});
