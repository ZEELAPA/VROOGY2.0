const distube = require('distube')

module.exports = {
    name: 'skip',
    description: "skip music",
    async execute(client, message, args, Discord){
        const NoEmbed = {
            color: 0xFF0000,
            description:'Someone else is already listening to music in different channel!',
        }
        const Guild = message.guild
        const Memberb = Guild.members.cache.get('831121573594529843');
        
        if(!message.member.voice.channel) return message.channel.send('You have to be connected to a voice channel before you can use this command!');
        if(message.member.voice.channel !== client.voice.channel) return message.channel.send({embed: NoEmbed})
        const queue = client.distube.getQueue(message)
        if(!queue) return
        if (!Memberb.voice.channel || Memberb.voice.channel.id === message.member.voice.channel.id){
            client.distube.play(message, {skip: true})
        } else if(Memberb.voice.channel.id !== message.member.voice.channel.id){
            return message.channel.send({embed: NoEmbed})
        }
    }
}