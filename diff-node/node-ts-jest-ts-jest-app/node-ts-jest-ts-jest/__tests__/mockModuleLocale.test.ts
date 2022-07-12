import * as randomIntModule from '../src/getRandomInt';
import * as utils from '../src/getGreeting';

jest.mock('../src/getRandomInt');

test('try to mock inner function getRandomInt', () => {
  const retVal = 2;
  const mockedRandomInt = randomIntModule.getRandomInt as any;

  mockedRandomInt.mockReturnValue(retVal);

  const locale = utils.pickLocale();
  const expectedLang = utils.languages[retVal];

  expect(locale).toBe(expectedLang);
});
