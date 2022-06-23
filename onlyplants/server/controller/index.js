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
    .then(() => {res.sendStatus(201)})
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
    .then(() => {res.sendStatus(201)})
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
    var user = req.body.email || req.params.email || req.query.email || 'null';
    model.getPlantCards(user.toLowerCase())
    .then((data) => {
      res.send(data).status(200);
    })
    .catch((err) => res.sendStatus(404));
  },

  // like other plants and store that
  // name1 and name2 will be alphabetically stored
  createLike: (req, res) => {
    let arr = [req.body.name1.toLowerCase(), req.body.name2.toLowerCase()];
    arr.sort();
    let val = {
      name1: arr[0],
      name2: arr[1],
    }
    model.createLike(val)
    .then(() => {res.sendStatus(201)})
    .catch((err) => console.log(err));
  },

  // See Matches
  checkMatch: (req, res) => {
    let arr = [req.query.name1.toLowerCase(), req.query.name2.toLowerCase()];
    arr.sort();
    let val = {
      name1: arr[0],
      name2: arr[1],
    }
    model.checkMatch(val)
    .then((data) => res.send(data).status(200))
    .catch((err) => res.sendStatus(404));
  },

  // get all matches for chat
  getAllMatches: (req, res) => {
    let val = req.query.email.toLowerCase();
    model.getAllMatches(val)
    .then((data) =>{
      let result = [];
      data.forEach((item) => {
        if (item.name1 === val) {
          result.push(item.name2)
        } else {
          result.push(item.name1)
        }
      })
      res.send(result).status(200)
    })
    .catch((err) => res.sendStatus(404));
  },

  updateMutual: (req, res) => {
    let arr = [req.body.name1.toLowerCase(), req.body.name2.toLowerCase()];
    arr.sort();
    let val = {
      name1: arr[0],
      name2: arr[1],
    }
    model.updateMutual(val)
    .then(() => {
      res.sendStatus(200)})
    .catch((err) => res.sendStatus(404));
  },

  getChatHistory: (req, res) => {
    let user = req.body.email || req.params.email || req.query.email || 'null';
    model.getChatHistory(user)
    .then((data) => {console.log(data); res.sendStatus(200)})
    .catch((err) => res.sendStatus(404))
  },

  postChat: (req, res) => {
    let user = req.body.user || req.params.user || req.query.user || 'null';
    let author = req.body.author || req.params.author || req.query.author || 'null';
    let text = req.body.text || req.params.text || req.query.text || 'null';
    let timestamp = Date.now();

    model.findChat({user, messageLog: {author, text, timestamp}})
    .then((data) => res.sendStatus(201))
    .catch((err) => res.sendStatus(404))
  }

}


  // PUT or update information on your plants listed

  // PUT or update information on your profile

  // DELETE a plant from the listing

