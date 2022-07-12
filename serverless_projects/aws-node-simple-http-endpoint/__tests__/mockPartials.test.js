const randomIntModule = require('../src/getRandomInt');
const utils = require('../src/utils');

jest.mock('../src/getRandomInt');

test('try to mock inner function getRandomInt', () => {
  const retVal = 2;

  randomIntModule.getRandomInt.mockReturnValue(retVal);

  const locale = utils.pickLocale();
  const expectedLang = utils.languages[retVal];

  expect(locale).toBe(expectedLang);
});
