import { Container, Service, Inject } from 'typedi';

export interface Factory {
  create(): void;
}

@Service({ id: 'bean.factory' })
export class BeanFactory implements Factory {
  create() {
    console.log('bean');
  }
}

@Service({ id: 'sugar.factory' })
export class SugarFactory implements Factory {
  create() {
    console.log('sugar');
  }
}

@Service({ id: 'water.factory' })
export class WaterFactory implements Factory {
  create() {
    console.log('water');
  }
}

@Service({ id: 'coffee.maker' })
export class CoffeeMaker {
  beanFactory: Factory;
  sugarFactory: Factory;
  waterFactory: Factory;

  constructor(
    @Inject('bean.factory') beanFactory: BeanFactory,
    @Inject('sugar.factory') sugarFactory: SugarFactory,
    @Inject('water.factory') waterFactory: WaterFactory
  ) {
    this.beanFactory = beanFactory;
    this.sugarFactory = sugarFactory;
    this.waterFactory = waterFactory;
  }

  make() {
    this.beanFactory.create();
    this.sugarFactory.create();
    this.waterFactory.create();
  }
}

//  provide your own "fake" dependencies to classes
// you are testing using set method: provide methods of the container:

export default function initContainerAndMake() {
  let coffeeMaker = Container.get<CoffeeMaker>('coffee.maker');
  coffeeMaker.make();
}
