import { myContainer } from '../inversify.config';
import { TYPES } from '../types';
import { Warrior } from '../interfaces';

describe('basics test', () => {
  test('container initiated and worked correctly', () => {
    const ninja = myContainer.get<Warrior>(TYPES.Warrior);

    expect(ninja.fight()).toBe('cut!'); // true
    expect(ninja.sneak()).toBe('hit!'); // true
  });
});
