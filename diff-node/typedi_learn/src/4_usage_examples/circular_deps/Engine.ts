import { Container, Inject, Service } from 'typedi';
import { Car } from './Car';

// Engine.ts
@Service()
export class Engine {
  // RangeError: Maximum call stack size exceeded
  // constructor(
  //   @Inject((type) => Car)
  //   public car: Car
  // ) {}

  @Inject((type) => Car)
  car: Car;

  engineMethod() {
    console.log('method from engine');
  }
}
