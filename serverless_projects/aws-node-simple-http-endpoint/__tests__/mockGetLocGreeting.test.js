const handler = require('../src/handler');
const utils = require('../src/utils');

jest.mock('../src/utils');

test('correct greeting is generated mock module', () => {
  const [en] = utils.languages;
  utils.pickLocale.mockReturnValue(en);

  handler.getLocGreeting(null, null, (err, res) => {
    const body = JSON.parse(res.body);
    const greeting = body.greeting;
    expect(greeting).toBe('Hello!');
  });
});
