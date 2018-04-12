const Discord = require("discord.js");
const client = new Discord.Client();
var Good = false;

client.on('ready', () => {

});

client.on('message', msg => { 
  if(!Good) {msg.channel.send('Я обновился!'); Good = true;}
});

client.login(process.env.BOT_TOKEN); // wow

