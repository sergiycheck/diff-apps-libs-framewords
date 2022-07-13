import { container, Ninja } from './inversify.config';

describe('support for classes', () => {
  test('container initiated and worked correctly', () => {
    const ninja = container.get<Ninja>(Ninja);

    expect(ninja.fight()).toBe('cut!'); // true
    expect(ninja.sneak()).toBe('hit!'); // true
  });
});
