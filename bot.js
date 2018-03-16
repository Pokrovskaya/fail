const Discord = require("discord.js");
const client = new Discord.Client();
var Kershes = 55;
var Shvillings = 900000;



client.on('ready', () => {
  console.log(`Logged in as ${423868710940311552}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }

  if (msg.content === 'What is the wahtang?') {
    msg.reply('I, Wahtang, am the keeper of knowleges of Otradnoye. You can ask me about anything here.');
  }

  if (msg.content === 'What is the legendary roles?') {
    msg.reply('Legendary role is the role what can be used by an only one person in Otradnoye');
  }

  if (msg.content === 'What is the battle system?') {
    msg.reply('Battle System - machanics of Otradnoe that will be added much later');
  }
  
  if (msg.content === 'What is the otradnoye-bot?') {
    msg.reply('Damned Otradnoye-bot is the fokkin piece of shut thats fokkin never worked right! Dumnit!');
  }
  
  if (msg.content === '/mymoney' && msg.channel.topic === 'Bank-de-koval') {
    msg.reply('ЗАТКНИСЬ МРАЗЬ!');
  }
  
  if (msg.content === '/treasury' && msg.channel.topic === 'Treasury of Otradnoye') {
    msg.reply('Бюджет града составляет ' + Shvillings.toString() + ' швиллиногов и ' + Kershes.toString() + ' кершей.');
  }
  
  if (msg.content === '/nalogytest' && msg.channel.topic === 'Treasury of Otradnoye') {
    msg.reply('Налоги отправленны.');
    Shvillings += 25000;
    Kershes += 5;
  }
  
  if (msg.content === 'Вы живете не в том мире в котором вы думаете') {
    //var success = false;
    msg.reply(msg.guild.roles.length.toString());
    for(var i = 0; i < msg.guild.roles.length; i++) {
      //msg.reply(msg.guild.roles[i].name);
      if(msg.server.roles[i].name === 'Купцовский!'){
        let myRole = msg.guild.roles[i];
        success = true;
        break;
      }
    }

    msg.reply('НЕКТО ОТКРЫЛ ТАЙНУ МИРОЗДАНИЯ, ВСЕ В ДЕПРЕССИИ');
    if(success) msg.autor.addRole(myRole).catch(console.error);
    else msg.reply('нихуя не знаю');
  }
  
});

client.login(process.env.BOT_TOKEN); // wow

