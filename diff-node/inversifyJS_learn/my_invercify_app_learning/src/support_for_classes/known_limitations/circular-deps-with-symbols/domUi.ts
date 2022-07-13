import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { lazyInject, TYPE } from './container';
import { Dom } from './dom';

@injectable()
export class DomUi {
  public dom: Dom;

  public constructor(@inject(TYPE.Dom) d: Dom) {
    this.dom = d;
  }
}
