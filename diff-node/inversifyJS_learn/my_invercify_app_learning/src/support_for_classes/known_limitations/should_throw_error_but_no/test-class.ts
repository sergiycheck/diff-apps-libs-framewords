import { injectable } from 'inversify';
import { Dom } from './dom';

@injectable()
export class Test {
  constructor(public dom: Dom) {
    console.log(dom);
  }
}
