const qrcode = require('qrcode-terminal')
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    //console.log('QR RECEIVED', qr);
    qrcode.generate(qr, { small:true});
});


client.on('ready', () => {
    console.log('client is ready');

    const number = "+393312678729";
    const text = "buon natale (il messaggio è stato automatizzazo)";
    const chatid = number.substring(1) + "@c.us";

    client.sendMessage(chatid, text);
});

client.initialize();

/*
const phoneNumbers = 
["+393312678729",
 "+393515031075"
];
*/