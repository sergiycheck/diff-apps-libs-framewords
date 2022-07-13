import { Container } from 'typedi';
import { Car } from './Car';
import { Engine } from './Engine';

// And that's all. This does NOT work for constructor injections.

export default function circularDeps() {
  const car = Container.get(Car);
  const engine = Container.get(Engine);

  car.engine.engineMethod();

  engine.car.carMethod();
}
