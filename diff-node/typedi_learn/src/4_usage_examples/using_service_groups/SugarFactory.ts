import { FactoryToken } from './FactoryTokne';
import { Service } from 'typedi';
import { Factory } from './Factory';

@Service({ id: FactoryToken, multiple: true })
export class SugarFactory implements Factory {
  create() {
    console.log('sugar created');
  }
}
