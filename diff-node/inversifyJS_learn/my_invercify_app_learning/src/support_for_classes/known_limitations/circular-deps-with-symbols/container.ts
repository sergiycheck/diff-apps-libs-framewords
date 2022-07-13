import { Container, inject, injectable } from 'inversify';
import getDecorators from 'inversify-inject-decorators';

let container = new Container();
let { lazyInject } = getDecorators(container);

const TYPE = {
  Dom: Symbol('Dom'),
  DomUi: Symbol('DomUi'),
  Test: Symbol('Test'),
};

export { container, lazyInject, TYPE };
