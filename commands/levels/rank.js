const { Command } = require("../../commands.js");
const db = require("../../database/database.js");
const Discord = require("discord.js");
module.exports = class RankCommand extends Command {
  constructor() {
    super({
      name: "rank",
      aliases: ["rk"],
      category: "levels",
      priority: 9,
      permLvl: 0
    });
  }
  async execute(msg) {
    let iduser = msg.author.id;
    let idserver = msg.guild.id;

    let exists = await db.levels.exists(iduser, idserver);

    if (exists) {
      let result = await db.levels.getAll(iduser, idserver);
      printEmbed(result, msg)
      
    } else {
      await db.levels.registerUsers(iduser, idserver);
      let result = await db.levels.getAll(iduser, idserver);
      printEmbed(result, msg)
    }
  }
};

function printEmbed(result, msg) {
  
  let expT = Math.trunc(Math.pow((Number(result.level)) / 0.1, 2)).toString();
  let Factor = Math.trunc(Math.pow((Number(result.level) +1 ) / 0.1, 2)) - Math.trunc(Math.pow((Number(result.level)) / 0.1, 2));
  
  let stats = result.xp - expT +'/'+ Factor;
  let porcent = (((Number(result.xp) - Number(expT)) / Factor) * 100).toFixed(0);
  
  const embed = new Discord.RichEmbed()
    .setTitle("Nivel del miembro " + msg.author.tag)
    .addField("Nivel", result.level, true)
    .addField("Sig. Nivel.", stats+' **Tot. Exp: ('+result.xp+')**', true)
    .addField("Porcentaje", porcent+'%', true)
    .setFooter(msg.guild.name)
    .setColor("RED");
  
  msg.channel.send(embed);
  
}
