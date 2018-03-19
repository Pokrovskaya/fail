const Discord = require("discord.js");
const client = new Discord.Client();
var Kershes = 55;
var Shvillings = 900000;



client.on('ready', () => {
  //console.log(`Logged in as ${423868710940311552}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Хватит по китайски говорить!');
  }

  if (msg.content ==='Кто такой Вахтанг?') {
    msg.channel.sendMessage('Вахтанг - дебил!');
  }
  
  if (msg.content ==='Правда, Морж?') {
    msg.reply('ага!');
  }
});

client.login(process.env.BOT_TOKEN); // wow

