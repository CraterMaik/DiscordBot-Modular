const commands = require('../../commands.js')
const db = require("../../database/database.js");
const Discord = require("discord.js");
const lang = require('../../util.js').getLanguage();

module.exports = class setXPCommand extends commands.Command {
  constructor() {
    super({
      name: "setxp",
      aliases: [],
      args: [
         new commands.Argument({
          optional: false,
          missingError: lang.error.noArgs.arg,
          invalidError: lang.error.incoArgs.text
        })
      ],
      category: "levels",
      priority: 9,
      permLvl: 3
    });
  }
  async execute(msg, args) {
    
    let members = msg.mentions.users.first() || msg.guild.members.get(args[0]);
    
    if(!members) return msg.channel.send(lang.error.noArgs.mention)
    //#ping @user, add, '22'
    
    if(args[1] === 'add') {
      
      if(!isNaN(args[2])){
        let cantidad = parseInt(args[2]);
        if(Number.isInteger(cantidad)){
         // console.log(members.id +' // '+ cantidad)
          db.levels.addXP(members.id, msg.guild.id, cantidad)
          return msg.channel.send('Se ha agregado corretamente la experiencia al usuario.')
        }
      } else {
        return msg.channel.send('Debes agregar un numero')
      }
      
    } else if(args[1] === 'remove'){
      if(!isNaN(args[2])){
        let cantidad = parseInt(args[2]);
        if(Number.isInteger(cantidad)){
         // console.log(members.id +' // '+ cantidad)
          db.levels.removeXP(members.id, msg.guild.id, cantidad)
          return msg.channel.send('Se ha quitado la experiencia al usuario.')
        }
      } else {
        return msg.channel.send('Debes agregar un numero')
      }
      
    }
   // let exists = await db.levels.exists(iduser, idserver);

  }
};


