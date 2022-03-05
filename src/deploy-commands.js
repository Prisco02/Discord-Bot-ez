/*
File comune per i comandi
DA USARE SOLO QUANDO LA LISTA DEI COMANDI VIENE AGGIORNATA 
*/

//Librerie per la creazione facile di comandi
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config(); //integra le variabili globali

//lista con tutti i comandi e la loro descrizione
const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
	.map(command => command.toJSON());//converte la lista in json

//invia i comandi al server
const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands }) //invia il json
	.then(() => console.log('Successfully registered application commands'))
	.catch(console.error);