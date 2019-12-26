const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

//BOT DISCORD
const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./util.js').getConfig()[1];

client.login(process.env.TKN).catch((err) => { // AGREGAR TOKEN DE SU BOT EN .ENV
  console.error(err);
  process.exitCode = 1;
  process.exit();
  
});

for(let file of fs.readdirSync('./events/')){

  if(file.endsWith('.js')){
    let fileName = file.substring(0, file.length - 3);
    
    let fileContents = require(`./events/${file}`);
    
    client.on(fileName, fileContents.bind(null, client)); 
    
    delete require.cache[require.resolve(`./events/${file}`)]; 
  }
}

