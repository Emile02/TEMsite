// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const readDir = require('./readdir.js');

const app = express();
require('dotenv').config();
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

const nodemailer = require('nodemailer');

// Créez un transporteur SMTP (Simple Mail Transfer Protocol) pour l'envoi d'e-mails
const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: 'corviniemile@gmail.com',
    pass: process.env.NODEMAILER_MDP
  }
});

// test mon transport de mail
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");

    }
});


app.post('/api/TEM/giftcard', (req, res) => {

    // mail 1 = Envoi d'un mail au resto pour lui notifier d'envoyer la carte cadeau
    const sendEmailToRestaurant = transporter.sendMail({
      from: 'corviniemile@gmail.com', // Adresse de l'expéditeur
      to: req.body.senderEmail, // Adresse du restaurant destinataire
      subject: 'Demande de bons cadeaux', // Objet du message
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="text-align: center; color: #ea5a47;">Demande de bons cadeaux</h2>
          <p>Bonjour,</p>
          <p>Une demande de bons cadeaux a été soumise pour votre restaurant. Voici les détails :</p>
          
          <h3>Détails de l'expéditeur :</h3>
          <ul>
            <li><strong>Nom de l'expéditeur:</strong> ${req.body.senderName} ${req.body.senderLastname}</li>
            <li><strong>Téléphone de l'expéditeur:</strong> ${req.body.senderPhone}</li>
            <li><strong>Email de l'expéditeur:</strong> ${req.body.senderEmail}</li>
          </ul>
    
          <h3>Détails du destinataire du bon cadeau :</h3>
          <ul>
            <li><strong>Nom du destinataire:</strong> ${req.body.receiverName} ${req.body.receiverLastname}</li>
            <li><strong>Email du destinataire:</strong> ${req.body.receiverEmail}</li>
          </ul>
    
          <p>Montant du bon cadeau : ${req.body.montant} euros</p>
          <p>Commentaire de l'expéditeur : ${req.body.comment}</p>
    
          <p>Merci de préparer le bon cadeau pour l'envoi à l'adresse suivante :  <strong>${ req.body.senderAdress } </strong>.</p>
    
          <p>Cordialement,</p>
          <p>Votre équipe.</p>
        </div>
      `
    });
    

      // mail 2 = Envoi d'un mail au client pour lui notifier de son envoi
    const mailToGiftSender = transporter.sendMail({
        from: 'corviniemile@gmail.com', // sender address
        to: req.body.senderEmail, // list of receivers
        subject: 'Vous avez commandé un bon cadeau au restaurant le TEM', // Objet du message
          html: `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
              <h2 style="text-align: center; color: #ea5a47;">Achat d'un bon cadeau</h2>
              <p>Bonjour, ${req.body.senderName} ${req.body.senderLastname}</p>
              <p>Vous venez de commander une carte cadeau dans notre restaurant Le TEM pour ${req.body.receiverName} ${req.body.receiverLastname}.</p>

              <p>Vous recevez ce mail pour vous avertir que nous avons bien reçu votre demande et que nous la traiterons dans les plus brefs délais.</p>
              <ul>
              <li>Montant du bon cadeau : ${req.body.montant} euros</li>
              <li>Votre commentaire : ${req.body.comment}</li>
              </ul>

              <p>Vous recevrez un mail dès que nous aurons envoyé le bon cadeau à l'adresse suivante : ${req.body.senderAdress}.</p>

              <p>Cordialement,</p>
              <p>L'équipe du restaurant le TEM.</p>
            </div>
          `
          });

      // mail 3 = Envoi d'un mail au client pour lui qu'il reçoit le cadeau chez lui
    if (req.body.receiverEmail != '') {
        const mailToGiftReceiver = transporter.sendMail({
          from: 'corviniemile@gmail.com', // sender address
          to: req.body.receiverEmail, // list of receivers
          subject: 'Vous avez reçu un bon cadeau au restaurant le TEM', // Objet du message
            html: `
              <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
                <h2 style="text-align: center; color: #ea5a47;">Achat d'un bon cadeau</h2>
                <p>Bonjour, ${req.body.receiverName} ${req.body.receiverLastname}</p>
                <p>Vous venez de recevoir une carte cadeau dans notre restaurant Le TEM par ${req.body.senderName} ${req.body.senderLastname}.</p>
  
                <p>Vous recevez ce mail pour vous avertir que nous avons bien reçu votre demande et que nous la traiterons dans les plus brefs délais.</p>
                <ul>
                <li>Montant du bon cadeau : ${req.body.montant} euros</li>
                <li>Message: ${req.body.comment}</li>
                </ul>
  
                <p>Vous recevrez un mail dès que nous aurons envoyé le bon cadeau à l'adresse suivante : ${req.body.senderAdress}.</p>
  
                <p>Cordialement,</p>
                <p>L'équipe du restaurant le TEM.</p>
              </div>
            `
            });
    }
    
    res.status(201).json({ message: 'E-mail enregistrée avec succès.' });

    console.log("req.body", req.body);
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
