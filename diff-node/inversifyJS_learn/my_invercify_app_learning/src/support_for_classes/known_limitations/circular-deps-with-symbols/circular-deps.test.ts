import 'reflect-metadata';
import { container, TYPE } from './container';
import { Dom } from './dom';
import { DomUi } from './domUi';
import { Test } from './test-class';
import { Container, injectable, inject } from 'inversify';
import getDecorators from 'inversify-inject-decorators';

describe('resolving circular deps', () => {
  test('should resolve circular deps', () => {
    // TODO: now working ?
    // can not resolve in runtime ?
    // link
    // https://stackoverflow.com/questions/47415313/inversify-circular-singleton-injection

    container.bind<Dom>(TYPE.Dom).to(Dom).inSingletonScope();
    container.bind<DomUi>(TYPE.DomUi).to(DomUi).inSingletonScope();
    container.bind<Test>(TYPE.Test).to(Test);
    const test = container.get(TYPE.Test);

    expect(test).toBeDefined();
  });

  test('Should be able to resolve lazy circular dependencies', () => {
    const container = new Container();
    const { lazyInject } = getDecorators(container);

    const TYPE = {
      Dom: Symbol.for('Dom'),
      DomUi: Symbol.for('DomUi'),
    };

    @injectable()
    class DomUi {
      public dom: Dom;
      public name: string;
      constructor(@inject(TYPE.Dom) dom: Dom) {
        this.dom = dom;
        this.name = 'DomUi';
      }
    }

    @injectable()
    class Dom {
      public name: string;
      @lazyInject(TYPE.DomUi) public domUi: DomUi;
      public constructor() {
        this.name = 'Dom';
      }
    }

    @injectable()
    class Test {
      public dom: Dom;
      constructor(@inject(TYPE.Dom) dom: Dom) {
        this.dom = dom;
      }
    }

    container.bind<Dom>(TYPE.Dom).to(Dom).inSingletonScope();
    container.bind<DomUi>(TYPE.DomUi).to(DomUi).inSingletonScope();

    const test = container.resolve(Test);

    expect(test.dom.name).toBe('Dom');
    expect(test.dom.domUi.name).toBe('DomUi');
    expect(test.dom.domUi.dom.name).toBe('Dom');
    expect(test.dom).toBe(test.dom.domUi.dom);
    expect(test.dom.domUi).toBe(test.dom.domUi.dom.domUi);
  });
});
