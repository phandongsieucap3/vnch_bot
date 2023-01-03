/** @format */

const Discord = require("discord.js");
const messageCreate = require("../Events/messageCreate");
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "gui_link",
    description: "Lenh de gui link.",
    async run(message, args, client){
        function _output(s){
            console.log(`[${new Date().toLocaleTimeString()}]: ${s}`);
        }

        _output("Da gui link thanh cong.");
        message.channel.send('https://discord.com/api/oauth2/authorize?client_id=1059752455925149746&permissions=8&scope=bot');
    }
});
