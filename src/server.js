const express = require('express');
const app = express();
const routes = require('./routes')
const port = 3333;

app.listen(port, () => console.log(`server running on port ${port}`));
app.use(routes)