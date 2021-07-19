const express = require('express');

const app = express();

const PORT = 4000;

app.all('/', (req,res) => {
    console.log(`${req.method} - ${req.url}`);
    res.send('Welcome Home');
});

app.get('/sayHi', (req,res) => {
    console.log(`${req.method} - ${req.url}`);
    res.send("Hi and Hello");
});


app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON ${PORT}...`);
});