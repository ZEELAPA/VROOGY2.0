const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'queue',
    aliases: ['q'],
    description: "Shows the current queue",
    async execute(client, message, args, Discord){
    try{
      if(!message.member.voice.channel) return message.channel.send('You have to be connected to a voice channel before you can use this command!');
      let queue = await client.distube.getQueue(message)
      if(!queue) return
      const { channel } = message.member.voice; // { message: { member: { voice: { channel: { name: "Allgemein", members: [{user: {"username"}, {user: {"username"}] }}}}}

        let embed = new MessageEmbed()
          .setColor("#79a4f8")
          .setTitle(`Queue:`)

        let counter = 0;
        for(let i = 0; i < queue.songs.length; i+=20){
          if(counter >= 10) break;
          let k = queue.songs;
          let songs = k.slice(i, i + 20);
          message.channel.send(embed.setDescription(songs.map((song, index) => `**${index + 1 + counter * 20})**  [${song.name}](${song.url}) - ${song.formattedDuration}`)))
          counter++;
        }

    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(e)
    }
  }
}