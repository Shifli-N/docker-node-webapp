const express = require('express');
const {exec} = require('child_process');
const { stderr } = require('process');

const app = express();

const PORT = 4000;

app.all('/', (req,res) => {
    console.log(`${req.method} - ${req.url}`);
    res.send('Welcome Home');
});

app.get('/sayHi', (req,res) => {
    console.log(`${req.method} - ${req.url}`);

    exec('echo "Hello" >> /var/opt/demo/dummy.txt && cat /var/opt/demo/dummy.txt', (err, stdout, stderr) => {
        console.log(`Done - ${stdout}`)
    })

    res.send("Hi and Hello");
});


app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON ${PORT}...`);
});