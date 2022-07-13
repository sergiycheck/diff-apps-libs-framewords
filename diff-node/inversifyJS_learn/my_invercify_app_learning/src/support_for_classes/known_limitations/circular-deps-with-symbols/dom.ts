import 'reflect-metadata';
import { injectable } from 'inversify';
import { lazyInject, TYPE } from './container';
import { DomUi } from './domUi';

@injectable()
export class Dom {
  @lazyInject(TYPE.DomUi) public domUi: DomUi;
}
