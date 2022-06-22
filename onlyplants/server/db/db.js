require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/plantr'
,function(){
  mongoose.connection.db.dropDatabase();
});

const PlantCardSchema = new mongoose.Schema({
  username: String,
  email: String,
  plant_type: String,
  about: String,
  location: String,
  water:{
    type: Number,
    min: 1,
    max: 5
  },
  sun:{
    type: Number,
    min: 1,
    max: 5
  },
  difficulty: {
    type: Number,
    min: 1,
    max: 5
  },
  imgUrl: String,
  profilePic: String
})

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  profileImg: String
})

const LikedCardSchema = new mongoose.Schema({
  name1: String,
  name2: String
})

const Profile = mongoose.model('Profiles', userSchema);
const PlantCard = mongoose.model('plantcards', PlantCardSchema);
const Match = mongoose.model('matches', LikedCardSchema)

module.exports = {Profile, Match, PlantCard}