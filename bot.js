const Discord = require("discord.js");
const client = new Discord.Client();
var Kershes = 55;
var Shvillings = 900000;
var Dobrota = 0;


client.on('ready', () => {
  //console.log(`Logged in as ${423868710940311552}!`);
  client.user.setPresence({ game: { name: 'Minecraft v0.1.1.0' }, status: 'dnd' });
});

client.on('message', msg => { 
  if (msg.content === 'ping') {
    msg.reply('Хватит по китайски говорить!');
  }
  
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
      else if (jar == 1) msg.reply('Мы поняли, заткнись!');
      else if (jar == 2) msg.reply('Ты совсем глупый или только чуть-чуть?');
      else msg.reply('Меня гриферят а тут еще ты со своими уведомлениями!');
    }
  }
  
  if (Dobrota >= 0 && (msg.content.search(/привет/i) != -1 || msg.content.search(/здравствуй/i) != -1)) {
      let jar1 = Math.random()*4;
      jar1 = Math.floor(jar1);
      if(jar1 == 0) msg.reply('дарова');
      else if (jar1 == 1) msg.reply('дратути');
      else if (jar1 == 2) msg.reply('О, приует!');
      else msg.reply('А вот и ты!');
  }
  
  if (msg.content.search(/правда/i) != -1 && msg.content.search(/морж/i) != -1 && msg.content.search(/\?/) != -1) {
    msg.reply('ага!');
  }
  
  if (msg.content ==='Кто убил Диану Серову?') {
    if(Dobrota > 10) msg.reply('ну блин она же суицыд пропагандировала все равно из школы бы выгнали ставился же вопрос об отчислении вот и убил чтобы не мучалась');
    if(Dobrota <= 10) msg.channel.send('хз');
  }
  
  if (msg.content ==='Был у нас, дружище Мирко!' && msg.author.username == "Банкирский") {
    let jar1 = Math.random()*4;
    jar1 = Math.floor(jar1);
    if(jar1 == 0) msg.channel.send('чё');
    else if (jar1 == 1) msg.reply('wut');
    else if (jar1 == 2) msg.reply('ок');
    else msg.reply('поздравляю');
  }
  
  
  if (msg.content ==='Скинь фоту Вахтанга') {
    msg.reply('Без б!');
    Dobrota += 1;
    msg.channel.sendFile('https://cdn1.rzn.info/data/image/newsadd/base/2018/02/171025_5a8564f601d4f.jpg');
  }
  
  if (msg.content.search(/морж/i) != -1 && (msg.content.search(/дебил/i) != -1 || msg.content.search(/даун/i) != -1 || msg.content.search(/придурок/i) != -1)) {
    msg.reply('Да пошел ты');
    Dobrota -= 2;
  }
  
  /*if (msg.content ==='Морж') {
    msg.reply('????');
    //msg.channel.sendFile('https://cdn1.rzn.info/data/image/newsadd/base/2018/02/171025_5a8564f601d4f.jpg');
  }*/
});

client.login(process.env.BOT_TOKEN); // wow

