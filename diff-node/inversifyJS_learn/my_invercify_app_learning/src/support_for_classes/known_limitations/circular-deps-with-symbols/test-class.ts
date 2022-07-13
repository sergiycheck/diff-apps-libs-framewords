import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { TYPE } from './container';
import { Dom } from './dom';

@injectable()
export class Test {
  _d: Dom;
  constructor(@inject(TYPE.Dom) d: Dom) {
    this._d = d;
  }
}
