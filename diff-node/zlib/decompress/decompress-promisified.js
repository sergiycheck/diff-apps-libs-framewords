const { unzip } = require("node:zlib");
const { promisify } = require("node:util");
const { readFileSync, writeFile } = require("fs");

const do_unzip = promisify(unzip);

const inputGz = "input.txt.gz";
const dest = "output.txt";

const buffer = Buffer.from(readFileSync(inputGz, "base64"), "base64");

async function startUnzip() {
  try {
    const buf = await do_unzip(buffer);
    const result = buf.toString();
    console.log(`result:\n`, result);
    writeFile(dest, Buffer.from(result), (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  } catch (err) {
    console.error("An error occurred:", err);
    process.exitCode = 1;
  }
}

startUnzip();
