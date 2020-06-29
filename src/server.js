const express = require('express');
const app = express();
const port = 3333;

app.listen(port, () => console.log(`server running on port ${port}`));

app.get('/', (req, res, next) => {
    res.send('<h1>Hello World</h1>')
});