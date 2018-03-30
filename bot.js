const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
var Kershes = 55;
var Shvillings = 900000;
var Dobrota = 0;
var Sotka = 0;
var SotkaTimer = 0;
var Game = 'Minecraft 5a0.3.0';
var GameTimer = 0;
var UserRegistred = [];


client.on('ready', () => {
  //console.log(`Logged in as ${423868710940311552}!`);
  client.user.setPresence({ game: { name: Game }, status: 'dnd' });
});

client.on('message', msg => { 
  let chance = Math.random()*40;
  chance = Math.floor(chance);
  if(chance == 0){
    let jar = Math.random()*2;
      jar = Math.floor(jar);
      if(jar == 0) { setTimeout(() => {msg.channel.send("Эй, народ, займете сотку до понедельника?") ;}, 5000);
                     Sotka = 1;
                     SotkaTimer = 5;}
    
      if(jar == 1) { setTimeout(() => {msg.channel.send("Блин, меня просто так на серваке забанили. За что?") ;}, 5000);
                     client.user.setPresence({ game: { name: 'Chrome' }, status: 'idle' });
                     GameTimer = 13;}
  }
  
  if(SotkaTimer > 0) SotkaTimer -= 1;
  else Sotka = 0;
  
  if(GameTimer > 0) GameTimer -= 1;
  else if(GameTimer == 0) {
    setTimeout(() => {msg.channel.send('Фухх, разбанили'); client.user.setPresence({ game: { name: Game }, status: 'dnd' });}, 12000);
    GameTimer = -1;
  }
  
  if(!msg.author.id in UserRegistred) {
    fs.readFile("userDb", function (err, contents) {
     var lines = contents.toString().split('\n').length - 1;
     let done = contents.toString();
    });
    
    if(done.search(new RegExp(msg.author.id, "i")) == -1) {
      fs.appendFile("userDb", "\n\n"+msg.author.id+"\nrank$0\nmoney$100\nprem$10\nexp$0\ninv$0$0$0$0$0\nnum$0$0$0$0$0\nlvl$0$0$0$0$0\nhunger$0\nrating$0");
      msg.reply("Да ты новичёк! Добро пожаловать!");
      
      //msg.author.
    }
    
    UserRegistred[UserRegister.length] = msg.author.id;
  }
  
  if (msg.content === 'ping') {
    msg.reply('оке');
  }
  
  if (msg.content.search(/морж/i) != -1 && msg.content.search(/лайкни/i) != -1) {
    msg.react('👍');
  }
  
 if (msg.content.search(/нет/i) != -1 && Sotka == 1) {
    msg.reply('ну блиииин');
    SotkaTimer = 0;
  } else if (msg.content.search(/да/i) != -1 && Sotka == 1) {
    msg.reply('спс!');
    SotkaTimer = 0;
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
  
  if(Dobrota > -1 && (msg.content.search(/привет/i) != -1 || msg.content.search(/здравствуй/i) != -1 || msg.content.search(/здравствуйте/i) != -1)) {
      let jar1 = Math.random()*4;
      jar1 = Math.floor(jar1);
    
      if(msg.member.roles.exists('id', '423172914691571722')) {
          if(jar1 == 0) msg.reply('дарова, даш сотку в пятёрку?');
          else if (jar1 == 1) msg.reply('дратути. Мне сегодня денег не перекинули, дай сотку, я куплю тебе липтон');
          else if (jar1 == 2) msg.reply('О, приует! Тебе за лейс с крабом сгонять?');
          else msg.reply('А вот и ты! Я не принуждаю, но дай сотку, пж');
      } else {
          if(jar1 == 0) msg.reply('дарова');
          else if (jar1 == 1) msg.reply('дратути');
          else if (jar1 == 2) msg.reply('О, приует!');
          else msg.reply('А вот и ты!');
      }
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

