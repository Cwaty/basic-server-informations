const Discord = require('discord.js');
const request = require("request")
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bota giriş sağladım - Sherwood ❤ ${client.user.tag}!`);
});

////////////////// Api keyi incele yapıp apiyi arattığınız zaman bulabilirsiniz
let SunucunuzunID  = "" ///// Buraya sunucunuzun api adresini (index.php?id=')'den sonrasını giriyorsunuz!

client.on('message', message => {
  if (message.content === "İstediğiniz") {
      var url = 'https://api.trackyserver.com/widget/index.php?id=' + gmServerID;
      request(url, function(err, response, body) {
          if(err) {
              console.log(err);
              return message.reply('Veritabanından verileri çekemedim!');
          }
          body = JSON.parse(body);
          var status = 'Sunucu aktif değil!';
          if(body.playerscount) {
              status = ' ';
              let onlinePlayers = +body.playerscount.split('/')[0]
              if(onlinePlayers > 0) {
                status  += 'Sunucumuzda anlık olarak \`' + onlinePlayers + '\` kişi oynuyor!';
                  if(body.playerslist) {
                    status  +='\n' + `> Sunucuda oynayan kullanıcılar ; \n \`\`\`${body.playerslist.map(p => p.name).join('\n')}\`\`\``;
                  }
              } else {
                  status += '*Sunucuda kimse oynamamakta*';
              }
          }
          message.channel.send(`${status.name} adlı sunucunun verileri ${status}`); //// Buraları kafanıza göre tasarlayabilirsiniz!
        //// Sunucu verilerini apiden çekmenizi çok önermiyorum , sunucu her kapanıp açıldığında api key res yediği için elle girmek azıcık uğraştırıyor
        //// Özellikle ready eventinde bu modülü kullanmayın. Botun durumu aktif olarak değişmediğinden dolayı hata alırsınız. botu açtığınız zaman sunucuda kaç kişi varsa hep o kalır.
        //// Api olarak çektirdiğimiz için buraları kendi kafanıza göre ayarlayabilirsiniz , örnek kullanıcıların istatistiği ve oynama süreleri gibi
      });
  }
});


client.login('Botunuzun tokeni!');
