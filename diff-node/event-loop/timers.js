const fs = require('fs');

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('./file.txt', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation((err, data) => {
  if (err) throw new Error(err);

  const startCallback = Date.now();

  // do something that will take 10ms...
  let difference = Date.now() - startCallback;
  while (difference < 10) {
    difference = Date.now() - startCallback;
    // do nothing
    console.log('data', data.toString());
    console.log('difference', difference);
  }
});
