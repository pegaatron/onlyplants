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

  // get all existing mutual matches
  getAllMatches: (info) => {
    return db.Match.find({isMutual: true});
  },

  // UPDATE mutual matching
  updateMutual: (info) => {
    return db.Match.findOneAndUpdate(info, {isMutual: true});
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
  },

  // DELETE all chat
  deleteChats: () => {
    return db.ChatLog.deleteMany({})
  },

  // GET chat log from specific chat
  getChatHistory: (info) => {
    return db.ChatLog.find({username: info})
  },

  // CREATE chat log or find and update if one already exists
  findChat: (info) => {
    return db.ChatLog.findOneAndUpdate({username: info.user}, {$push: {messageLog: info.messageLog}}, { upsert: true })
  },

}