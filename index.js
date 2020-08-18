
const { Worker} = require('worker_threads');
const axios = require('axios');

let processes = 0;
let results = '';

let fibonacci = new Worker('./fibonacci.js',{ workerData: 40 });
let prime = new Worker('./prime.js',{ workerData: 40});

fibonacci.on('message', (data) => {
    console.log("message", data)
    results += data.output + '\n';
})

prime.on('message', (data) => {
    console.log("message", data)
    results += data.output + '\n';
})

fibonacci.on('exit', (code) => {
    processes += 1
    if (processes == 2) {
      postThis();
    }
})

prime.on('exit', (code) => {
    processes += 1
    if (processes == 2) {
      postThis();
    }
})


const postThis = () => {

  const data = {
    "activity":"Interview",
    "title":"Brigitte",
    "body": results
  };

  axios.post('https://hooks.glip.com/webhook/38dbfcb8-57c2-49d6-a7c1-44ed88024ee0', data)
      .then((res) => {
          console.log(`Status: ${res.status}`);
          console.log('Body: ', res.data);
      }).catch((err) => {
          console.error(err);
      });
}


