const CC = require("currency-converter-lt");

let currencyConverter = new CC();

const cconverter = async ({ from, to, amount }) => {
  const result = await currencyConverter
    .from(from.toUpperCase())
    .to(to.toUpperCase())
    .amount(Number(amount))
    .convert();
  return result;
};

module.exports = { cconverter };
