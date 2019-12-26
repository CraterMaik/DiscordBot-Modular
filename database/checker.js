const sqlite3 = require('sqlite3').verbose();
const config = require('../util.js').getConfig()[1];
const sql = new sqlite3.Database(config.dirBase)

async function tableCoins(){
  await sql.run('CREATE TABLE IF NOT EXISTS coins (iduser TEXT, coins INTEGER, status INTEGER)');
  await sql.run('CREATE TABLE IF NOT EXISTS userLevels (usersUnique TEXT, iduser TEXT, idserver TEXT, level INTEGER, xp INTEGER DEFAULT 0)')
}

module.exports = {
  createTables: async function(){
    try {
      await tableCoins();
      
      
    } catch (e) {
      console.error(e)
    }
  }
}