const fs = require('fs');
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

// Array of phone numbers
const phoneNumbers = ["phonenuberwithprefix:string"];

// Your message
const message = "MESSAGE";

// Create a new instance of the client
const client = new Client();

client.on('qr', qr => {
  // Generate and display the QR code in the terminal
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');

  // Loop through the array of phone numbers and send a message to each one
  phoneNumbers.forEach((number, index) => {
      // Add delay between messages
      setTimeout(() => {
          // Get chatId from number
          const chatId = number.substring(1) + "@c.us";

          // Send message
          client.sendMessage(chatId, message).then(() => {
              console.log(`Message sent to number ${index + 1}/${phoneNumbers.length}`);
          });
      }, index * 5000); // Delay of 5 seconds between messages
  });
});

client.initialize();
