const Discord = require('discord.js');
const gamedig = require("gamedig")
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Bota giriş sağladım - Sherwood ❤ ${client.user.tag}!`);
});

Gamedig.query({
    type: 'Sherwood ', //// Buraya sunucunuzun türünü örnek : Gmod , Fivem , Minecraft
    host: 'Sherwood X Wizardry' ////// Buraya sunucunuzun hostunu
}).then((state) => {
    console.log(state);
}).catch((error) => {
    console.log("Sunucu aktif değil!");
});


client.login('Botunuzun tokeni');
