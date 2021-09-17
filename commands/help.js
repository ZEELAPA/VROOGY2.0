module.exports = {
    name: 'help',
    description: "help command",
    execute(client, message, args, Discord){

      var currentDate = new Date();
      const zeroes = args[0]

        const helpEmbed = {
            color: 0xADD8E6,
            title: 'PREFIX: Z',
            url: 'https://discord.gg/dds',
            author: {
                name: 'COMMANDS',
                icon_url: 'https://media.discordapp.net/attachments/823252853950775340/854508587149819934/e918cc70-6508-4e15-abed-0e823e34b9b2.png?width=112&height=112',
                url: 'https://discord.gg/dds',
            },
            thumbnail: {
                url: 'https://cdn.discordapp.com/avatars/655739930865172482/5216bc51ed277c59e12788c5f43cb329.png?size=256',
            },
            fields: [
                {
                    name: 'AVATAR', 
                    value: '`AVATAR COMMAND`',
                    inline: true,
                },
                {
                    name: 'CBT', 
                    value: '`CBTITTIES`',
                    inline: true,
                },
                {
                    name: 'DDS', 
                    value: '`DDS SERVER LINK`',
                    inline: true,
                },
                {
                    name: 'DIC', 
                    value: '`DICTIONARY`',
                    inline: true,
                },
                {
                    name: 'DICUB', 
                    value: '`ALT DICTIONARY`',
                    inline: true,
                },
                {
                    name: 'DM', 
                    value: '`ANONYMOUSLY DM SOMEONE`',
                    inline: true,
                },
                {
                    name: 'JOIN', 
                    value: '`JOIN VC`',
                    inline: true,
                },
                {
                    name: 'LEAVE', 
                    value: '`LEAVE VC`',
                    inline: true,
                },
                {
                    name: 'NUMBER', 
                    value: '`RANDOM NUMBER FROM 1-10`',
                    inline: true,
                },
                {
                    name: 'POLL', 
                    value: '`YES OR NO POLL`',
                    inline: true,
                },
				{
                    name: 'TEST', 
                    value: '`TEST COMMAND`',
                    inline: true,
                },
                {
                    name: 'TRANSLATE', 
                    value: '`GOOGLE TRANSLATE ANYTHING TO ENGLISH`',
                    inline: true,
                },
                {
                    name: 'ZHELP MODS', 
                    value: 'COMMANDS FOR MODS',
                    inline: false,
                },
            ],
            footer: {
                text: `TIME CHECK: ${(currentDate.getHours()+8) + ":" + currentDate.getMinutes()}`,
                icon_url: 'https://hotemoji.com/images/dl/h/ten-o-clock-emoji-by-twitter.png',
             },
        };

        const modsEmbed = {
            color: 0xADD8E6,
            title: 'PREFIX: Z',
            url: 'https://www.youtube.com/watch?v=VReOS9h7YdE',
            author: {
                name: 'COMMANDS',
                icon_url: 'https://cdn.discordapp.com/avatars/655739930865172482/5216bc51ed277c59e12788c5f43cb329.png?size=256',
                url: 'https://discord.gg/dds',
            },
            fields: [
                {
                    name: 'CLEAR', 
                    value: '`CLEAR MESSAGES`',
                    inline: true,
                },
                {
                    name: 'RPING', 
                    value: '`PING A MEMBER RANDOMLY`',
                    inline: true,
                },
                {
                    name: 'GIVEAWAY', 
                    value: '`COUNTS DOWN TO 10 AND PINGS SOMEONE`',
                    inline: true,
                },
                {
                    name: 'LIST', 
                    value: '`LIST ALL MEMBERS IN THE SERVER`',
                    inline: true,
                },
                {
                    name: 'SPAMVC + (CHANNEL.ID)', 
                    value: '`SPAMS A VC WITH ZEEBOT`',
                    inline: true,
                },
                {
                    name: 'EVERYDRAG', 
                    value: '`DRAGS MENTIONED USER TO ALL VCS`',
                    inline: true,
                },
                {
                    name: 'CDRAG', 
                    value: '`(CHAOSDRAG) DRAGS EVERY PERSON ON EVERY VC TO ALL VCS`',
                    inline: true,
                },
            ],
        };

        const nsfwEmbed = {
            color: 0xADD8E6,
            title: 'PREFIX: Z',
            url: 'https://www.youtube.com/watch?v=VReOS9h7YdE',
            author: {
                name: 'COMMANDS',
                icon_url: 'https://cdn.discordapp.com/avatars/655739930865172482/5216bc51ed277c59e12788c5f43cb329.png?size=256',
                url: 'https://discord.gg/dds',
            },
            fields: [
                {
                    name: 'ASS', 
                    value: '`ASS PICS`',
                    inline: true,
                },
                {
                    name: 'BOOBS', 
                    value: '`BOOB PICS`',
                    inline: true,
                },
                {
                    name: 'PANTIES', 
                    value: '`PANTIEWS PICS (WHY TF??)`',
                    inline: true,
                },
                {
                    name: 'PUSSY', 
                    value: '`PUSSY PICS (CUZ WHY NOT??)`',
                    inline: true,
                },
                {
                    name: 'THIGHS', 
                    value: '`THIGH PICS MMMM`',
                    inline: true,
                },
            ],
        };


        if(!zeroes){
          message.channel.send({embed: helpEmbed})
        } else if(zeroes.toUpperCase() === "MODS"){
         message.channel.send({embed: modsEmbed});
        } else if(zeroes.toUpperCase() === "NSFW"){
         message.channel.send({embed: nsfwEmbed});
        } 
    }
}
