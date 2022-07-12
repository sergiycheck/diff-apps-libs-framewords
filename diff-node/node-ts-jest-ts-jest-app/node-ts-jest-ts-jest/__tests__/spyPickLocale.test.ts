import * as utils from '../src/getGreeting';

test('mocking pickLocale', () => {
  const retVal = 'en';

  const spyPickLocale = jest
    .spyOn(utils, 'pickLocale')
    .mockImplementation(() => retVal);

  const result = utils.pickLocale();

  expect(spyPickLocale).toHaveBeenCalled();
  expect(result).toBe(retVal);

  spyPickLocale.mockRestore();
});
