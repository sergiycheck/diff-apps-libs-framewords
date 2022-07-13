import { Container } from 'typedi';
import { BeanFactory } from './BeanFactory';
import { FactoryToken } from './FactoryTokne';
import { SugarFactory } from './SugarFactory';
import { WaterFactory } from './WaterFactory';

export default function appUsingServiceGroups() {
  // now you can get all factories in a single array
  Container.import([BeanFactory, SugarFactory, WaterFactory]);
  const factories = Container.getMany(FactoryToken); // factories is Factory[]
  factories.forEach((factory) => factory.create());
}
