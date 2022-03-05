const { Client, Intents } = require('discord.js'); //api discord
require('dotenv').config(); //integra le variabili globali

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Inizia l'esecuzione del BOT
client.once('ready', () => {
	console.log('Ready!');
});

//esecuzione comandi con metodo deploy-command.js
//esegue azioni a seguito di un'interazione
client.on('interactionCreate', async interaction => {
 	if (!interaction.isCommand()) return; //verifica che l'interazione sia avvenuta tramite comando

 	const { commandName } = interaction; //crea costante per migliore lettura dell'interazione

 	if (commandName === 'ping') {
 		await interaction.reply('Pong!');
 	} 
     //GUILD: server Discord
     //USER: utente che interagisce
     //use ` instead of ' to integrate variables in a string
     else if (commandName === 'server') {
 		await interaction.reply(`Server info: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
 	} else if (commandName === 'user') {
 		await interaction.reply(`Your name: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
 	}
});

//Il bot esegue il login con il token
client.login(process.env.TOKEN); 