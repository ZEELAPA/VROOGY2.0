module.exports = {
    name: 'join',
    description: "join vc command",
    async execute(client, message, args, Discord){

      const vc = args.slice(0).join(' ');
      const channel = client.channels.cache.get(vc);
      const cmvc = message.member.voice.channel

      const Guild = message.guild
      const Memberb = Guild.members.cache.get('831121573594529843');

      if (!Memberb.voice.channel || Memberb.voice.channel.id === message.member.voice.channel.id){
	     	await message.member.voice.channel.join();
	    } else if(Memberb.voice.channel.id !== message.member.voice.channel.id){
        return message.channel.send('WEWS SAN LODS');
      } 
    }
}