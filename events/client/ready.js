module.exports = (Discord, Client) => {
    console.log('ZEEBOT Is Online!');

    Client.user.setPresence({
      status: "online", 
      activity: {
        name: `GTA VI`,
        type: "PLAYING",
        largeImageKey: 'http://vignette1.wikia.nocookie.net/fantendo/images/6/68/GTAVI.png/revision/latest?cb=20131024180849'
     }
    })
}
    /* Client.user.setActivity('GTA VI', { type: 'PLAYING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error); */




/* module.exports = (client) =>{ 
  client.on('ready', () => {
   console.log('ZEEBOT IS ONLINE!');

   const arrayStatus = [
     `${client.guilds.cache.size} servers`,
     `${client.channels.cache.size} channels`,
     `${client.users.cache.size} users`,
     `${client.user.tag} discord bot`
   ];
 
   let index = 0;
   setInterval(() =>{
     if(index === arrayStatus.length) index=0;
     const status = arrayStatus[index];
     console.log(status);
     client.user.setActivity(status);
     index++;
    }, 5000)
  })
}



 */ 