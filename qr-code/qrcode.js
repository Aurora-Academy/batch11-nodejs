const QRCode = require("qrcode");

const genQR = async (url) => {
  return await QRCode.toDataURL(url);
};

module.exports = { genQR };
