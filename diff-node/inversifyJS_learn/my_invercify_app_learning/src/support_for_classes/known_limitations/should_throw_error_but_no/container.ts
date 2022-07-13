import 'reflect-metadata';
import { Container, injectable } from 'inversify';
import getDecorators from 'inversify-inject-decorators';

let container = new Container();
let { lazyInject } = getDecorators(container);

export { container, lazyInject };
