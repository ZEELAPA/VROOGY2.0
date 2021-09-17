module.exports = (Discord, client, message) => {
  
  client.snipe.set(message.channel.id, {
    content: message.content,
    author: message.author,
    member: message.member,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
}