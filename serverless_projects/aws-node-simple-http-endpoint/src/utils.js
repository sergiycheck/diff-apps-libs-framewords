const { getRandomInt } = require('./getRandomInt');

function getResponse(responseBody, callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  };

  callback(null, response);
}

function getLocalGreeting(language) {
  switch (language) {
    case 'en':
      return 'Hello!';
    case 'es':
      return '¡Hola!';
    case 'ru':
      return 'Привет!';
    default:
      return '👋';
  }
}

const languages = ['en', 'es', 'cn', 'fr', 'ru'];
function pickLocale() {
  return languages[getRandomInt(0, languages.length)];
}

module.exports = {
  getResponse,
  getLocalGreeting,
  pickLocale,
  languages,
};
