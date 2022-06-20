const db = require('../db/db.js');
// query db
module.exports = {
  // create new user profile for yourself
  createUser: (userData) => {
    return db.Profile.create(userData)
  },

  // create new plant listings
  createPlantCard: (plantData) => {
    return db.PlantCard.create(plantData)
  },

  // get plantCards to swipe that are NOT your own
  // ideally get plantCards you HAVENT liked yet either....
  getPlantCards: (email) => {
    return db.PlantCard.find({email: {$ne:email}})
  },

  // get YOUR profile to display your info
  getUserProfile: (email) => {
    return db.PlantCard.find({email: email})
  },
  // create LIKE relationships
  createLike: (info) => {
    return db.Match.create(info)
  },

  // check if Match exists
  checkMatch: (info) => {
    return db.Match.find(info);
  },

  // DELETE all plantCards
  deletePlantCards: () => {
    return db.PlantCard.deleteMany({})
  },
  // DELETE all matches
  deleteMatches: () => {
    return db.Match.deleteMany({})
  },
  // DELETE all profiles
  deleteProfiles: () => {
    return db.Profile.deleteMany({})
  }

  // PUT or update information on your plants listed

  // PUT or update information on your profile

  // DELETE a plant from the listing


}