const { workerData, parentPort } = require('worker_threads')

const is_prime = (n) => {
    if (n == 0) return false;
    if (n < 4) return true;
    for (let i = 2; i < n; ++i) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  let j = 0;
  let seq = 1;
  while (seq <= workerData) {
      if (is_prime(j)) {
        parentPort.postMessage({ output: `PRIME ${seq}: ` + j })
        //console.log(`PRIME ${seq}: ` + j)
        seq += 1;
      }
      j += 1;
  }