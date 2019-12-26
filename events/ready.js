const config = require('../util.js').getConfig()[1];
const commands = require('../commands.js');
const db = require('../database/database.js');

let startTime = Date.now();

module.exports = async (client) => {
  
  commands.registerCategories(config.categories);
  commands.registerCommands();
  await db.check.createTables();
  let time = Date.now() - startTime;
  client.user.setActivity(config.statusBOT)
  console.log(`Estoy listo!, tomo ${time}ms`);
  
}