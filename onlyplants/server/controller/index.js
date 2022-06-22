const model = require('../models/index.js');

module.exports = {

  ///////// USER /////////

  // create new account
  createNewProfile: (req, res) => {
    let profile = {
      email: req.body.email.toLowerCase(),
      password:req.body.password
    }

    model.createUser(profile)
    .then(() => {console.log('profile created'); res.sendStatus(201)})
    .catch((err) => res.sendStatus(400));
  },

  // create new plant posting
  createPlantCard: (req, res) => {
    let plant = {
      username: req.body.username.toLowerCase(),
      email: req.body.email.toLowerCase(),
      location: req.body.location,
      plant_type: req.body.plant_type ,
      about: req.body.about,
      water: parseInt(req.body.water),
      sun: parseInt(req.body.sun),
      difficulty: parseInt(req.body.difficulty),
      imgUrl: req.body.imgUrl,
      profilePic: req.body.profilePic
    }

    model.createPlantCard(plant)
    .then(() => {
      console.log('new plant listing created');
      res.sendStatus(201)
      })
    .catch((err) => res.sendStatus(404));
  },

  // get User profile info to display
  getUserProfile: (req, res) => {
    var info = req.body.email || req.params.email || req.query.email;
    model.getUserProfile(info.toLowerCase())
    .then((data) => {res.send(data).status(200)})
    .catch((err) => res.sendStatus(404));
  },

  ////////// Swipe //////////

  // (Read) see avaialble matches
  getPlantCards: (req, res) => {
    var user = req.body.email || 'null';
    model.getPlantCards(user.toLowerCase())
    .then((data) => {
      res.send(data).status(200);
    })
    .catch((err) => res.sendStatus(404));
  },

  // like other plants and store that
  // name1 and name2 will be alphabetically stored
  createLike: (req, res) => {
    let val = {
      name1: req.body.name1.toLowerCase(),
      name2: req.body.name2.toLowerCase(),
    }
    model.createLike(val)
    .then(() => {
      console.log('liked a card');
      res.sendStatus(201);
    })
    .catch((err) => console.log(err));
  },

  // See Matches
  checkMatch: (req, res) => {
    let val = {
      name1: req.body.name1,
      name2: req.body.name2,
    };
    model.checkMatch(val)
    .then((data) => res.send(data).status(200))
    .catch((err) => res.sendStatus(404));
  }

}


  // PUT or update information on your plants listed

  // PUT or update information on your profile

  // DELETE a plant from the listing

