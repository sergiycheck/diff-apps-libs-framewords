const handler = require('../src/handler');
const utils = require('../src/utils');

jest.mock('../src/utils');

describe('handler methods', () => {
  test('correct time is generated', () => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello, the current time is ${new Date().toTimeString()}.`,
      }),
    };

    handler.getCurrTime(null, null, (err, res) => {
      expect(res).toStrictEqual(response);
    });
  });

  test('correct greeting is generated', () => {
    const [en] = utils.languages;
    const spyPickLocale = jest
      .spyOn(utils, 'pickLocale')
      .mockImplementation(() => en);

    handler.getLocGreeting(null, null, (err, res) => {
      const body = JSON.parse(res.body);
      const greeting = body.greeting;
      expect(greeting).toBe('Hello!');
    });
    spyPickLocale.mockRestore();
  });

  test('correct greeting is generated mock module', () => {
    const [en] = utils.languages;
    utils.pickLocale.mockReturnValue(en);

    handler.getLocGreeting(null, null, (err, res) => {
      const body = JSON.parse(res.body);
      const greeting = body.greeting;
      expect(greeting).toBe('Hello!');
    });
  });
});
