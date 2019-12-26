const commands = require('../../commands.js')
const discord = require('discord.js');
const lang = require('../../util.js').getLanguage();

module.exports = class AvatarCommand extends commands.Command {
  constructor(){
    super({
      name: 'avatar',
      aliases: [],
      args: [
        new commands.Argument({
          optional: true,
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
    let mentions = msg.mentions.users.first() || msg.author;
    
    const embed = new discord.RichEmbed()
     .setImage(mentions.displayAvatarURL)
     .setColor('GREEN')
     .setFooter(`Avatar de ${mentions.tag}`)   
    msg.channel.send(embed);
  }
}