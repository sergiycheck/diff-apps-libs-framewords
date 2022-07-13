import { inject, injectable } from 'inversify';
import { lazyInject, TYPE } from './container';
import { Dom } from './dom';

@injectable()
export class DomUi {
  public dom: Dom;
  public name: string;
  constructor(@inject(TYPE.Dom) dom: Dom) {
    this.dom = dom;
    this.name = 'DomUi';
  }
}
