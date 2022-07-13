import { FactoryToken } from './FactoryTokne';
import { Service } from 'typedi';
import { Factory } from './Factory';

// BeanFactory.ts
@Service({ id: FactoryToken, multiple: true })
export class BeanFactory implements Factory {
  create() {
    console.log('bean created');
  }
}
