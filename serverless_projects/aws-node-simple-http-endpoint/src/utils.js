function getResponse(responseBody, callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  };

  callback(null, response);
}

function getLocalGreeting(language) {
  switch (language) {
    case "en":
      return "Hello!";
    case "es":
      return "¡Hola!";
    case "ru":
      return "Привет!";
    default:
      return "👋";
  }
}

function pickLocale() {
  const languages = ["en", "es", "cn", "fr", "ru"];
  return languages[getRandomInt(0, languages.length)];
}

function getRandomInt(min, max) {
  let ceilMin = Math.ceil(min);

  let floorMax = Math.floor(max);

  let maxMinDiffPlus1 = floorMax - ceilMin + 1;

  let btwZeroAndMaxMinDffPlus1 = Math.random() * maxMinDiffPlus1;

  let sumOfBtwAndMaxMinDiffPlus1AndCeilMin = btwZeroAndMaxMinDffPlus1 + ceilMin;

  return Math.floor(sumOfBtwAndMaxMinDiffPlus1AndCeilMin);
}

module.exports = {
  getResponse,
  getLocalGreeting,
  pickLocale,
  getRandomInt,
};
