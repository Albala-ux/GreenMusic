const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");

module.exports = {
  name: "ping",
  description: "Command for message and api latency", 
  async execute(client, message, args) {
    let StartDate = Date.now();
    const Wait = new MessageEmbed()
      .setColor(COLOR)
      .setDescription(`Please Wait...`);
    message.channel.send(Wait).then(Msg => {
      let EndDate = Date.now();

      const embed = new MessageEmbed()
        .setColor(`COLOR`)
        .setTitle(`Pong!`)
        .addField("Message Latency", `${Math.floor(EndDate - StartDate)}ms`)
        .addField("API Latency", `${Math.round(client.ws.ping)}ms`)
        .setTimestamp();
      Msg.delete();
      message.channel.send(embed);
    });
  }
};