import 'reflect-metadata';
import { container } from './container';
import { Dom } from './dom';
import { DomUi } from './domUi';
import { Test } from './test-class';

describe('classes as identifiers and circular dependencies', () => {
  test('classes for identifiers throws error', () => {
    container.bind<Dom>(Dom).toSelf().inSingletonScope();
    container.bind<DomUi>(DomUi).toSelf().inSingletonScope();
    const test = container.resolve(Test);

    expect(test).not.toBeUndefined();
    expect(test.dom).not.toBeUndefined();
    expect(test.dom.domUi.dom).toBeUndefined();
  });
});
