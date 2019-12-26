module.exports = {
  getConfig: function(){
    let config = './config.js';
    return [config, require(config)]
  },
  getSend: function(msg, text){
   // console.log(text)
    msg.channel.send(text)
    
  },
  getLanguage: function(){
    let lang = require('./languages/ES-es.json');
    return lang;
  }
}