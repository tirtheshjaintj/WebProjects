const {Client,GatewayIntentBits}=require('discord.js');
const client=new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages
  ,GatewayIntentBits.MessageContent]});


require('dotenv').config();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


const axios = require("axios")


  
  client.on('messageCreate', (message) => {
        console.log(message.content);
        if(message.author.bot) return;

axios.post('https://tirtheshjain.000webhostapp.com/AI-assist-helper.php', {
  prompt:message.content
 })
 .then(function (response) {
   console.log(response.data);
 })
 .catch(function (error) {
   console.log(error);
 });
        
        message.reply({
          content:`Hello Dear ${message.author.globalName}`
        })

  });

  client.on('interactionCreate', async interaction => {
    if (interaction.commandName === 'ping') {
      await interaction.reply(`Pong You! ${interaction.user.globalName}`);
    }
  });

  client.login(process.env.TOKEN);
