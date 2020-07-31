const { MessageEmbed } = require("discord.js")
const { Color } = require("../config.json");

module.exports = {
  name:"snipe", 
  description:"showing last deleted message", 
  execute(client, message, args) {
                const msg = client.snipes.get(message.channel.id)
        if(!msg){
            const NoMsg = new MessageEmbed()        
            .setDescription("There was no message deleted in this channel!")
            return message.channel.send(NoMsg);
        }
        const snipe = new MessageEmbed()
        .setAuthor(msg.author)
        .addField("Channel", msg.channel, true)
        .setTimestamp()
        if(msg.content)snipe.addField("Content", msg.content, true)
        if(msg.image)snipe.setImage(msg.image)
        message.channel.send(snipe);
}} 