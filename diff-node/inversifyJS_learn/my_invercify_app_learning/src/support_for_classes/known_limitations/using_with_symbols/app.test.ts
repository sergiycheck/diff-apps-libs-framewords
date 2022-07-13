import 'reflect-metadata';

import { container, TYPE } from './container';
import { Dom } from './dom';
import { DomUi } from './domui';
import { Test } from './test-class';

describe('use symbol.for("DOM") as as service identifiers instead of the classes like Dom', () => {
  test('resolves', () => {
    container.bind<Dom>(TYPE.Dom).to(Dom).inSingletonScope();
    container.bind<DomUi>(TYPE.DomUi).to(DomUi).inSingletonScope();

    const test = container.resolve(Test); // Works!
    const dom = container.get<Dom>(TYPE.Dom);
    const domUi = container.get<DomUi>(TYPE.DomUi);

    expect(test).not.toBeUndefined();
    // TODO: how to get domUI and dom circular deps
    expect(dom.domUi).toBeUndefined();
    expect(domUi.dom).toBeDefined();
  });
});
