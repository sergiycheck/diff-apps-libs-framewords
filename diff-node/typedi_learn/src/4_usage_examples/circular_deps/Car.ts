import { Container, Inject, Service } from 'typedi';
import { Engine } from './Engine';

// Car.ts
@Service()
export class Car {
  // constructor injection works only for one class
  // constructor(@Inject((type) => Engine) public engine: Engine) {}

  @Inject((type) => Engine)
  engine: Engine;

  carMethod() {
    console.log('method from car');
  }
}
