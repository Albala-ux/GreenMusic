const { MessageEmbed } = require("discord.js");
const {Color} = require("../config.json");

module.exports = {
  name: "avatar",
  async execute(client, message, args) {
    const member = message.mentions.users.first() || message.author;

    const Embed = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`${member.username}`)
      .setImage(member.displayAvatarURL())
      .addField(`Link`, `[Click Me](${member.displayAvatarURL()})`);

    message.channel.send(Embed);
  }
};