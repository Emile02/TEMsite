// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const readDir = require('./readdir.js');

const app = express();

const connectDB = require('./config/db.config.js');

var corsOptions = {
    origin: 'https://drdh.fr'
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

const nodemailer = require('nodemailer');

// Créez un transporteur SMTP (Simple Mail Transfer Protocol) pour l'envoi d'e-mails
const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: 'corviniemile@gmail.com',
    pass: 'FxD9RTOnZ7szyCUQ'
  }
});


app.post('/api/TEM/giftcard', (req, res) => {

    // mail 1 = Envoi d'un mail au client qui offre les informations pour la carte cadeau
    if (req.body.sendEmailToGiftReveiver === false) {
        const sendMailToGiftSendOnly = {
            from: 'corviniemile@gmail.com',
            to: req.body.email,
            subject: 'Vous avez commandé une carte cadeau au restaurant Le TEM',
            // Vous allez la recevoir par courrier postal dans les prochains jours.
            text: JSON.stringify(req.body)
        };
    } else if (req.body.sendEmailToGiftReveiver === true) {
        const sendWarnMailToGiftSender = {
            from: 'corviniemile@gmail.com',
            to: req.body.email,
            subject: 'Vous avez offert une carde cardeau au restaurant Le TEM à ' + req.body.prenom + ' ' + req.body.nom + ' !',
            // Vous allez la recevoir par courrier postal dans les prochains jours.
            text: JSON.stringify(req.body)
        };
        const sendWarnMailToGiftReceiver = {
            from: 'corviniemile@gmail.com',
            to: req.body.emailReceiver,
            subject: req.body.prenom + ' ' + req.body.nom + ' ' + 'vous offre une carde cardeau au restaurant Le TEM !',
            // Vous allez la recevoir par courrier postal dans les prochains jours.
            text: JSON.stringify(req.body)
        };
    }

    console.log("req.body", req.body);
    // mail 2 = envoi d'un mail à la personne qui recois et un mail à la personne qui à envoyé pour lui notifier de son envois

    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
    //     } else {
    //         console.log('E-mail envoyé avec succès :', info.response);
    //     }
    // });

    res.status(201).json({ message: 'Carte cadeau envoyée avec succès.' });
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
