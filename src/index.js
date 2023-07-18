require("dotenv").config();
const { SapphireClient } = require("@sapphire/framework");
const { GatewayIntentBits } = require("discord.js");

const client = new SapphireClient({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.login(process.env.DISCORD_TOKEN);
