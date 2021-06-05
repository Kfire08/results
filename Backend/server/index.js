const express = require('express');
const Datastore = require('nedb');
const fetch = require('node-fetch');
require('dotenv').config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Starting server at ${PORT}`);
});

/*
app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.post('/api', (request, response) => {
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});
*/

app.post('/result', async (request, response) => {
    const data = request.body;
    const arr = [];
    const api_url = `http://proedge.me/test.php?rollnumber=`;
    for ( i=0;i<data.length;i++) {
        const fetch_response = await fetch(`api_url${data[i]}`);
        arr.push(await response.text());
    }
    response.json(arr);
});
//     const json = await fetch_response.json();
//     response.json(json);

//   const data = {
//     result: json,
//   };
//   response.json(data);