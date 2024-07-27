const express = require('express');
const app = express();
const port = 3333;

app.get('/', (req, res) => {
  res.send('Welcome to the express server');
});

app.get('/loginDetails', (req, res) => {
    res.send(JSON.stringify(loginDetails));
});

app.get('/login/:name', (req, res) => {
    loginDetails.push({ 'name': req.params.name, 'login_time': new Date()});
    res.send(req.params.name + ',You are logged in!');
});

app.get('/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
