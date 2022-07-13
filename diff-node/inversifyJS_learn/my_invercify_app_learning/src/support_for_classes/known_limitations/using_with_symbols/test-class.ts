import { inject, injectable } from 'inversify';
import { TYPE } from './container';
import { Dom } from './dom';

@injectable()
export class Test {
  public dom: Dom;
  constructor(@inject(TYPE.Dom) dom: Dom) {
    this.dom = dom;
  }
}
