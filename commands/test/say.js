const commands = require('../../commands.js')
const lang = require('../../util.js').getLanguage();

module.exports = class SayCommand extends commands.Command {
  constructor(){
    super({
      name: 'say',
      aliases: [],
      args: [
        new commands.Argument({
          optional: false,
          missingError: lang.error.noArgs.arg,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: 'test',
      priority: 9,
      permLvl: 3
    });
  }
  execute(msg, args){
    
    msg.channel.send(args.join(' '));
  }
}