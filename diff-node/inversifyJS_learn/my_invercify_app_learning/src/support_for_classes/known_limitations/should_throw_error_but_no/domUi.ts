import { injectable } from 'inversify';
import { lazyInject } from './container';
import { Dom } from './dom';

@injectable()
export class DomUi {
  @lazyInject(Dom) public dom: Dom;

  domUiMethod() {
    console.log('domUiMethod');
  }
}
