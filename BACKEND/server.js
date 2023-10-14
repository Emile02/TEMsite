// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const readDir = require('./readdir.js');

const app = express();

const connectDB = require('./config/db.config.js');

var corsOptions = {
    origin: 'http://localhost:8080'
};

connectDB();
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Emile application.' });
});

const controlller = require('./controllers/controller.js');

app.post('/api/TEM', (req, res) => {
    const newEmail = req.body.email;
    console.log("emaiiiiiiiiiiiiiil", newEmail);
    controlller.create(req);
    res.status(201).json({ message: 'Adresse e-mail enregistrée avec succès.' });
});

let photoDir = readDir('./public');
console.log("photoDir", photoDir);

app.get('/api/photos', (req, res) => {
    res.json(photoDir);
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
