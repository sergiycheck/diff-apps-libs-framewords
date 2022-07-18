import logFiles from '../src/glob';

describe('glob tests', () => {
  test('matches correctly ', async () => {
    const expected = ['src/glob.ts', 'src/index.ts'];
    const actual = await logFiles();
    expect(actual).toEqual(expected);
  });
});
