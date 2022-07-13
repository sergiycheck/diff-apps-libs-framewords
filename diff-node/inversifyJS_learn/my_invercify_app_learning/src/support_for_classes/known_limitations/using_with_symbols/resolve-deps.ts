import 'reflect-metadata';
import { container, TYPE } from './container';
import { Dom } from './dom';
import { DomUi } from './domui';
import { Test } from './test-class';

export default function resolveCircularDeps() {
  container.bind<Dom>(TYPE.Dom).to(Dom).inSingletonScope();
  container.bind<DomUi>(TYPE.DomUi).to(DomUi).inSingletonScope();

  const test = container.resolve(Test); // Works!
  const dom = container.get<Dom>(TYPE.Dom);
  const domUi = container.get<DomUi>(TYPE.DomUi);

  console.log('test', test);
  console.log('dom', dom);
  console.log('domUi', domUi);
}
