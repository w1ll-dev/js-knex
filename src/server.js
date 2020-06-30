const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3333;

app.use(express.json());
app.use(routes);

// catch all
app.use((error, req, res, next) => {
    try {
        res.status(error.status || 500);
        res.json({error: error.message})
    } catch (error) {
        
    }
})

app.use((req, res, next) => {
    const error = new Error('not found')
    error.status = 404 
    next(error)
})

app.listen(port, () => console.log(`server running on port ${port}`));