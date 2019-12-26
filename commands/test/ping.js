const { Command } = require('../../commands.js')

module.exports = class PingCommand extends Command {
  constructor(){
    super({
      name: 'ping',
      aliases: ['pn', 'p'],
      category: 'test',
      priority: 9,
      permLvl: 0
    });
  }
  execute(msg){

    msg.channel.send('ping!!! desde nuestro modulo test')
  }
}