import { inject, injectable } from 'inversify';
import { lazyInject, TYPE } from './container';
import { DomUi } from './domui';

@injectable()
export class Dom {
  public name: string;
  @lazyInject(TYPE.DomUi) public domUi: DomUi;
  public constructor() {
    this.name = 'Dom';
  }
}
