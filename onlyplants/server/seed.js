const Post = require('./models/index.js');
const plantCardData = require('../examples/plantCards.json');
const matchData = require('../examples/matches.json');

Post.deletePlantCards()
.then(() => Post.deleteMatches())
.then(() => Post.deleteProfiles())
.then(() => Promise.all(plantCardData.map((card) => Post.createPlantCard(card))))
.then(() => Promise.all(matchData.map((match) => Post.createLike(match))))
.then(() => console.log('database has been reset'))
.catch((err) => console.log('Error in resetting db: ',err))