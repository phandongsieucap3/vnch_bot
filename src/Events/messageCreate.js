const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", (client, message) => {
    if(message.author.bot) return;

    if(!message.content.startsWith(client.prefix)) return;
    
    const args = message.content.substring(client.prefix.length).split(/ +/);

    const command = client.commands.find(cmd => cmd.name == args[0]);

    if (!command) return message.channel.send(`Lenh khong hop le! Vui long nhap dung lenh`)

    command.run(message, args, client);
});
