const distube = require('distube')
const { format, createBar } = require("../handlers/functions")
const progressbar = require('string-progressbar');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    description: "now playing music",
    async execute(client, message, args, Discord){
        try{
            if(!message.member.voice.channel) return message.channel.send('You have to be connected to a voice channel before you can use this command!');
            let queue = await client.distube.getQueue(message)
            if(!queue) return
            let track = queue.songs[0];
            console.log(track)
            const total = track.duration 
            const middle = queue.currentTime / 1000
            const bar = progressbar.splitBar(total, middle, 20)

            const npEmbed = {
                color: 0x79a4f8,
                fields: [
                    { 
                        name: "\u200B",
                        value: `[${track.name}](${track.url}) [${track.user}]`,
                    },
                    {
                        name: "\u200B",
                        value: `${bar[0]} ${queue.formattedCurrentTime}/${track.formattedDuration}`,
                    },
                ],
            }

            message.channel.send({embed: npEmbed})
        } catch (e) {
            console.log(String(e.stack).bgRed)
            return message.channel.send(e)
        }
    }
}

