require('dotenv').config();
const express = require('express');
const db = require('./db/db.js');
const path = require('path');
const controller = require('./controller')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// USER Profile Routes:
app.post('/profile', controller.createNewProfile);
app.get('/profile', controller.getUserProfile);

// PLANT CARD Routes:
app.post('/plantCard', controller.createPlantCard);
app.get('/plantCard', controller.getPlantCards);

// MATCHES Routes:
app.get('/match', controller.checkMatch);
app.post('/like', controller.createLike);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
})