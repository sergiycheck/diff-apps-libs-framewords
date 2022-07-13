import { DomUi } from './domUi';
import { injectable } from 'inversify';

@injectable()
export class Dom {
  public domUi: DomUi;
  constructor(domUi: DomUi) {
    this.domUi = domUi;
  }

  domMethod() {
    console.log('domMethod');
  }
}
