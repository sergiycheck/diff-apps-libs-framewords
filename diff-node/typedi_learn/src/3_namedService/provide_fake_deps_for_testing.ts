import { CoffeeMaker } from './named_service';
import { Container, Service, Inject } from 'typedi';

class FakeCoffeeMaker {
  make() {
    console.log('fake making');
  }
}

class FakeBeanFactory {
  create() {
    console.log('fake bean');
  }
}
class FakeSugarFactory {
  create() {
    console.log('fake sugar');
  }
}
class FakeWaterFactory {
  create() {
    console.log('fake water');
  }
}

export function setFakeCoffeeMaker() {
  Container.set(CoffeeMaker, new FakeCoffeeMaker());

  let coffeeMaker = Container.get<CoffeeMaker>('coffee.maker');
  coffeeMaker.make();
}

export function setFakeServices() {
  Container.set([
    { id: 'bean.factory', value: new FakeBeanFactory() },
    { id: 'sugar.factory', value: new FakeSugarFactory() },
    { id: 'water.factory', value: new FakeWaterFactory() },
  ]);

  let coffeeMaker = Container.get<CoffeeMaker>('coffee.maker');
  coffeeMaker.make();
}

export default function chooseHowToFake() {
  // setFakeCoffeeMaker();
  // or for named services
  setFakeServices();
}
