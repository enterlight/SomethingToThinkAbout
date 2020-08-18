const { workerData, parentPort } = require('worker_threads')

const fibonacci = (n) => {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2)
}


for (i = 0; i < workerData; i++) {
    //console.log(`FIB ${i}: ` + fibonacci(i))
    parentPort.postMessage({output: `FIB ${i+1}: ` + fibonacci(i)})
}