const queries = require('./queries.js');

module.exports = {
  exists: async function(iduser, idserver) {
    let query =
      "SELECT * FROM userLevels WHERE iduser = ? AND idserver = ? LIMIT 1";
    let result = await queries.getQuery(query, [iduser, idserver]);
    // []
    
    if(result != undefined){
      return true;
    }
     return false;
    
  },
  registerUsers: async function(iduser, idserver) {
    let query = "INSERT INTO userLevels(usersUnique, iduser, idserver, level) VALUES (?, ?, ?, ?)";
    
    let userUnique = iduser+"-"+idserver;

    await queries.runQuery(query, [userUnique, iduser, idserver, 0]);
    
  },
  getAll: async function(iduser, idserver){
    let query = "SELECT * FROM userLevels WHERE iduser = ? AND idserver = ?";
    let result = await queries.getQuery(query, [iduser, idserver]);
    
    //console.log(result)
    return result;
  },
  updateXP: async function(iduser, idserver, newXP){
    let query = "UPDATE userLevels SET xp = xp + ? WHERE iduser = ? AND idserver = ?";
    
    await queries.runQuery(query, [newXP, iduser, idserver]);
  },
  addXP: async function(iduser, idserver, newXP){
    let query = "UPDATE userLevels SET xp = xp + ? WHERE iduser = ? AND idserver = ?";
    
    await queries.runQuery(query, [newXP, iduser, idserver]);
  },
  removeXP: async function(iduser, idserver, newXP){
    //let querySelect = "SELECT * FROM userLevels WHERE iduser = ? AND idserver = ?";
    //let result = await queries.getQuery(querySelect, [iduser, idserver]);
    
    
    let query = "UPDATE userLevels SET xp = xp - ? WHERE iduser = ? AND idserver = ?";
    //if(result)
    await queries.runQuery(query, [newXP, iduser, idserver]);
  },
  getXP: async function(iduser, idserver){
    let query = "SELECT xp, level FROM userLevels WHERE iduser = ? AND idserver = ?";
    let result = await queries.getQuery(query, [iduser, idserver]);
    
    if(result){
     return result
    }
    return false;
    
  },
  updateLevel: async function(iduser, idserver, newLevel){
    let query = "UPDATE userLevels SET level = ? WHERE iduser = ? AND idserver = ?";
    
    await queries.runQuery(query, [newLevel, iduser, idserver]);
  },
  
  
  
};