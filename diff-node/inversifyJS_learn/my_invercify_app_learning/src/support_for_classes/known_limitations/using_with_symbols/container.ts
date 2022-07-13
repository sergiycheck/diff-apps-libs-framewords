import { Container, injectable, inject } from 'inversify';
import getDecorators from 'inversify-inject-decorators';

const container = new Container();
const { lazyInject } = getDecorators(container);
const TYPE = {
  Dom: Symbol.for('Dom'),
  DomUi: Symbol.for('DomUi'),
};
export { container, lazyInject, TYPE };
