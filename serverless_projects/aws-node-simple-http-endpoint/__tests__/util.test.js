const utils = require('../src/utils');

describe('handler methods', () => {
  it('correct greeting is generated', () => {
    expect(utils.getLocalGreeting('en')).toBe('Hello!');
    expect(utils.getLocalGreeting('fr')).toBe('👋');
  });

  it('mocking pickLocale', () => {
    const retVal = 'en';

    const spyPickLocale = jest
      .spyOn(utils, 'pickLocale')
      .mockImplementation((__) => retVal);

    utils.pickLocale();

    expect(spyPickLocale).toHaveBeenCalled();

    spyPickLocale.mockRestore();
  });
});
