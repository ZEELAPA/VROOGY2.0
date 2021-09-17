const Discord = require('discord.js');
const client = new Discord.Client();
const Distube = require('distube')

const ards = require("ards-client")
const ardsClient = new ards.Client();

const fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.snipe = new Discord.Collection();
client.distube = new Distube(client, { searchSongs: false, emitNewSongOnly: false });


['commandsz', 'events'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
});

client.distube

.on("playSong", (message, queue, song) => {
    let playingEmbed = new Discord.MessageEmbed()
    .setColor("#79a4f8")
    .setTitle(`Now Playing`)
    .setDescription(`[${song.name}](${song.url}) [${song.user}]`)
    
    message.channel.send(playingEmbed)
})

.on("playList", (message, queue, playlist, song) => {
    message.channel.send(`Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\``)
})
    
.on("addSong", (message, queue, song) => {
    let queueEmbed = new Discord.MessageEmbed()
    .setColor("#79a4f8")
    .setDescription(`Queued [${song.name}](${song.url}) [${song.user}]`)
    message.channel.send(queueEmbed)
})

.on("addList", (message, queue, playlist) => message.channel.send(
    `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue`
))
// DisTubeOptions.searchSongs = true
.on("searchResult", (message, result) => {
    let i = 0;
    message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
})
// DisTubeOptions.searchSongs = true
.on("searchCancel", (message) => message.channel.send(`**Searching cancelled!**`))
.on("error", (message, e) => {
    console.error(e)
    message.channel.send("An error encountered: " + e);
});


client.login('ODMxMTIxNTczNTk0NTI5ODQz.YHQoSA.dEb9509U0imUaJkfKXy90fxZrJU')