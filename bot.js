const Discord = require("discord.js");
const client = new Discord.Client();
var Kershes = 55;
var Shvillings = 900000;



client.on('ready', () => {
  //console.log(`Logged in as ${423868710940311552}!`);
  client.setGame('Minecraft');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Хватит по китайски говорить!');
  }

  if (msg.content ==='Кто такой Вахтанг?') {
    msg.channel.sendMessage('Вахтанг - дебил!');
  }
  
  if (msg.content.search(/тебя здесь не уважают/i) != -1 && msg.author.username == "ubugged-otradnoe") {
    let chance = Math.random()*10;
    chance = Math.floor(chance);
    if(chance == 0) {
      let jar = Math.random()*10/3;
      jar = Math.floor(jar);
      if(jar == 0) msg.reply('Харе флудить!');
      else if (jar == 1) msg.reply('Мы поняли, заткнись!')
      else if (jar == 2) msg.reply('Ты совсем глупый или только чуть-чуть?');
      else msg.reply('Меня гриферят а тут еще ты со своими уведомлениями!');
    }
  }
  
  if (msg.content ==='Правда, Морж?') {
    msg.reply('ага!');
  }
  
  if (msg.content ==='Кто убил Диану Серову?') {
    msg.reply('ну блин она же суицыд пропагандировала все равно из школы бы выгнали ставился же вопрос об отчислении вот и убил чтобы не мучалась');
  }
  
  if (msg.content ==='Был у нас, дружище Мирко!' && msg.author.username == "Банкирский") {
    if(msg.channel.sendMessage('чё');
  }
  
  
  if (msg.content ==='Скинь фоту Вахтанга') {
    msg.reply('Без б!');
    msg.channel.sendFile('https://cdn1.rzn.info/data/image/newsadd/base/2018/02/171025_5a8564f601d4f.jpg');
  }
  
  if (msg.content ==='Морж') {
    msg.reply('????');
    //msg.channel.sendFile('https://cdn1.rzn.info/data/image/newsadd/base/2018/02/171025_5a8564f601d4f.jpg');
  }
});

client.login(process.env.BOT_TOKEN); // wow

