const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const {userName, password} = req.body;

    res.json({requestData: {userName, password}});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
