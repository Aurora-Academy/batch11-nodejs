// Generate QR Code for  the url on the terminal using package qrcode.

// Write a nodejs application to convert the currency from one currency to another using package: currency-converter-lt

// Steps
// Enable npm in project
// npm init -y => package.json
// npm i currency-converter-lt
// Write the code
// node index.js

const { cconverter } = require("./currency");

const main = async ({ from, to, amount }) => {
  const result = await cconverter({ from, to, amount });
  console.log({ result });
};

main({ from: "usd", to: "NPR", amount: 1 });
