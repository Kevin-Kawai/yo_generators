const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => console.log(`Example app is listening on ${port}`))
