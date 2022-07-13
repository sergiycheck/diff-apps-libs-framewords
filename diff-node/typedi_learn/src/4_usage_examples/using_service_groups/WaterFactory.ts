import { FactoryToken } from './FactoryTokne';
import { Service } from 'typedi';
import { Factory } from './Factory';

@Service({ id: FactoryToken, multiple: true })
export class WaterFactory implements Factory {
  create() {
    console.log('water created');
  }
}
