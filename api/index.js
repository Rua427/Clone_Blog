const express = require('express');
const app = express();
const port = process.env.PORT || 8081;

app.get('/test', (req, res) => {
    res.json('test ok');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })