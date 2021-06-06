const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Starting server at ${PORT}`);
});

app.use(express.urlencoded({ extended: true }));

app.post('/result', async (req, res) => {
  const roll= req.body;
  let rdata = [];
  const fetchData = async () => {
    for ( i=0;i<roll.length;i++) {
      const response = await axios(`http://proedge.me/test.php?rollnumber=${roll[i]}`);
      rdata.push(await response.data);
  }
  res.send(rdata);
}
  fetchData();
});