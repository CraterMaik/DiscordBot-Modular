const config = require('../util.js').getConfig()[1];
const commands = require('../commands.js');
const db = require('../database/database.js');
const util = require('../util.js');

let prefix = config.prefix;

module.exports = async (client, message) => {
  
  if(message.author.bot) return;
  
  let cmd = message.content.slice(prefix.length);
  
  if(cmd != undefined){
    cmd = cmd.split(' ');
  }
 
  let result = await commands.checkValidCmd(message, cmd, prefix);
  
  if(result){
  //  db.coins.updateCoin(message.author.id, 2)
    
    db.levels.updateXP(message.author.id, message.guild.id, 2)
    let valid = await db.levels.getXP(message.author.id, message.guild.id);
    
    if(valid) {
      let xpLevel = Math.floor(0.1 * Math.sqrt(valid.xp + 1));
      let realLevel = valid.level;
      
      if(xpLevel > realLevel) {
        db.levels.updateLevel(message.author.id, message.guild.id, xpLevel)
        util.getSend(message, '<@'+message.author.id+'> has subido de nivel!!! **' + xpLevel +'**')
      } else {
        let xpLevelRes = Math.floor(0.1 * Math.sqrt(valid.xp - 1));
        console.log(xpLevelRes)
        db.levels.updateLevel(message.author.id, message.guild.id, xpLevel)
      }
    }
    commands.executeCmd(message, cmd);
  }
  
}