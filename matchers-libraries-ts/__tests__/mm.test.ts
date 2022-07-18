import micromatch from 'micromatch';

describe('glob tests', () => {
  test('1 matches correctly ', async () => {
    const input = ['foo', 'bar', 'baz', 'qux'];
    const patterns = ['f*', 'b*'];
    const expected = ['foo', 'bar', 'baz'];
    expect(micromatch(input, patterns)).toEqual(expected);
  });

  test('1 matches correctly ', async () => {
    const input = ['foo', 'bar', 'baz', 'qux'];
    const patterns = ['*', '!b*'];
    const expected = ['foo', 'qux'];
    expect(micromatch(input, patterns)).toEqual(expected);
  });

  test('isMatch for micromatch', () => {
    expect(micromatch.isMatch('foo', 'f*')).toBeTruthy();
  });
});
