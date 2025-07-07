const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eloSELjT#zIFJh-1EthSY6VmcT7dU_uTVM409W3RaEqlWehDUKjo",
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/Rochana99/ROCHANA-MD/refs/heads/main/images/20250706_212935.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 ROCHANA-MD Is Alive Now😍*",
BOT_OWNER: '94766443560',  // Replace with the owner's phone number



};
