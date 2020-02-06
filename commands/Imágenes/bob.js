module.exports = class command extends require('../../base/models/Command.js') {
  constructor(client) {
    super(client, {
      name: 'bob',
      description: 'Genera una imagen con un avatar donde estará en un cuadro, pintado por Bob Ross.',
      usage: prefix => `\`${prefix}bob [@usuario]\``,
      examples: prefix => `\`${prefix}bob\``,
      enabled: true,
      cooldown: 5,
      aliases: ['bobross'],
      botPermissions: [],
      memberPermissions: [],
      dirname: __dirname
    });
  }
  async run(message, args, data, embed) {
    let client = this.client;
    try {
      let msg = await message.channel.send(client.replies.generatingSomething(message)),
        img = await require('node-superfetch').get(`https://eclyssia-api.tk/api/v1/bobross?url=${(message.mentions.users.first() || message.author).displayAvatarURL({ format: 'png', size: 2048 })}`);
      msg.delete();
      message.channel.send(new (require('discord.js')).MessageAttachment(img.raw));
    } catch (e) {
      message.channel.send(message.error(e));
      client.err({
        type: 'command',
        name: this.help.name,
        error: e
      });
    }
  }
};
