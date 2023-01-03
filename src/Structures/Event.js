/** @format */

const Discord = require("discord.js")

const Client = ("./Client.js");

/**
 * @template {keyof Discord.Client.Events} K
 * @param {Client} client 
 * @param  {...Discord.ClientEvents[K]} eventArgs 
 */
function RunFunction(client, ...eventArgs) {}

/**
 * @template {keyof Discord.Client.Events} K
 */
class Event {
    /**
     * 
     * @param {K} event 
     * @param {RunFunction<K>} runFunction 
     */
    constructor(event, runFunction) {
        this.event = event;
        this.run = runFunction;
    }
}

module.exports = Event;