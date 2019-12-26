const commands = require('../../commands.js')
const lang = require('../../util.js').getLanguage();

module.exports = class IdCommand extends commands.Command {
  constructor(){
    super({
      name: 'idmember',
      aliases: [],
      args: [
        new commands.Argument({
          optional: false,
          type: 'mention',
          missingError: lang.error.noArgs.mention,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'test',
      priority: 9,
      permLvl: 0
    });
  }
  execute(msg, args){
    let mentions = msg.mentions.users.first();
    
    msg.channel.send(mentions.id);
  }
}