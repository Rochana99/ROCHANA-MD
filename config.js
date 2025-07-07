const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "2w5RxKiQ#Q9IfrHRlLe-lSR-_m3WAE1yz6QPzUXp-TNFPYb9ioNU",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Rochana99/ROCHANA-MD/blob/main/images/20250706_212935.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 ROCHANA-MD Is Alive Now😍*",
BOT_OWNER: '94766443560',  // Replace with the owner's phone number



};
