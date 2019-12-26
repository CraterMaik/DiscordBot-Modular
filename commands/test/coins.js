const { Command } = require('../../commands.js')
const db = require('../../database/database.js');

module.exports = class CoinsCommand extends Command {
  constructor(){
    super({
      name: 'coins',
      aliases: [],
      category: 'test',
      priority: 9,
      permLvl: 0
    });
  }
  async execute(msg){
    
    let data = await db.coins.viewMember(msg.author.id);
    
    if(data){
      msg.channel.send(`Tienes **${data.coins} modenas**.`)
    } else {
      
      await db.coins.addMember(msg.author.id, 10, 0)
      
      let data = await db.coins.viewMember(msg.author.id);
      msg.channel.send(`Tienes **${data.coins} modenas**.`)
    }
    
    
  }
}