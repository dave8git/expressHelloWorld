const express = require('express');
const path = require('path');

const app = express(); 

app.use(('/user', (req, res, next) => {
    res.send('Musisz się najpierw zalogować!');
    next();
}));

app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname, `/views/${name}`));
    };
    next();
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req,res) => {
    res.show('home.html');
});

app.get('/home', (req,res) => {
    res.show('home.html');
});

app.get('/about', (req,res) => {
    res.show('about.html');
});

app.use((req, res) => {
    res.status(404).sendFile('404.html');
});

app.listen(7000, () => {
    console.log('Server is running on port: 7000');
});