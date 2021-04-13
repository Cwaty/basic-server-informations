const Discord = require('discord.js');
const gamedig = require("gamedig")
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Bota giriş sağladım - Sherwood ❤ ${client.user.tag}!`);
});


client.on('message' ,message => { ///// Bu eventi isteğinize göre düzenleyebilirsiniz!
    if(message.content === "istediğiniz bir şey!")
Gamedig.query({
    type: 'Sherwood ', //// Buraya sunucunuzun türünü örnek : Gmod , Fivem , Minecraft
    host: 'Sherwood X Wizardry' ////// Buraya sunucunuzun hostunu
}).then((state) => {
    ////// buraya istediğiniz örnek bir şeyi girebilirsiniz:
    //// örnek message.channel.send(`${state.connect} (Sunucunun ip adresini gösterir) 2. bir örnek verelim ${state.ping} (Sunucunun pingini gösterir)`)
    console.log(state);
}).catch((error) => {
    ///// 2. bir nokta üstte girdiğimiz state.connect , state.ping gibi değişkenler sunucu kapandığı zaman çalışmaz , ondan dolayı bilgileri buraya state.ping olarak değil de elinizle yazmanız gerekir genelde 
    /// örnek : message.channel.send(new MessageEmbed().setDescription(`Sunucunun IP adresi : 111.111.111 , Sunucunun haritası : Harita adı.`)) gibi şeyleri elinizle girebilirsiniz
    //// genelde botun durumunu ayarlamak için bu modül kullanılır kullanıcı sayısı [0 / maxplayer] olduğu zaman oyuncuların kafası karışabilir ondan dolayı botun durumu olarak kullanıcaksanız **Sunucu Kapalı** olarak kullanmanızı tavsiye ederim.
    console.log("Sunucu aktif değil!") 
});
});


client.login('Botunuzun tokeni');
