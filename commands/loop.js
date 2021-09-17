const distube = require('distube')

module.exports = {
    name: 'pause',
    description: "play music",
    async execute(client, message, args, Discord){
        if(!message.member.voice.channel) return message.channel.send('You have to be connected to a voice channel before you can use this command!');

        const NoEmbed = {
            color: 0xFF0000,
            description:'Someone else is already listening to music in different channel!',
        }
        
        const Guild = message.guild
        const Memberb = Guild.members.cache.get('831121573594529843');
        
        if(!Memberb.voice.channel || Memberb.voice.channel.id === message.member.voice.channel.id){
            const queue = client.distube.getQueue(message)
                if(!queue) return message.channel.send('There is no queue')
                let mode = null
                switch(args[0]){
                    case "off":
                        mode = 0
                        break
                    case "song":
                        mode = 1
                        break
                    case "queue":
                        mode = 2
                        break
                }
                mode = client.distube.setRepeatMode(message, mode)
                mode = mode ? mode === 2 ? "Queue" : "Song" : "Off"
                if(!args[1]) return message.channel.send('Please specify: **Queue/Song/Off**')
                const embed1 = new Discord.MessageEmbed()
                .setDescription(`Now looping the **${mode}**`)
                .setColor("#79a4f8")
                message.channel.send(embed1)
        } else if(Memberb.voice.channel.id !== message.member.voice.channel.id){
            message.channel.send({embed: NoEmbed})
        }
    }
}