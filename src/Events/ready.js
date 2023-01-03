const Event = require("../Structures/Event.js");

module.exports = new Event("ready", client => {
    console.log("Bot dang hoat dong");
    client.user.setActivity("may thang cs", { type: "WATCHING"})
});
