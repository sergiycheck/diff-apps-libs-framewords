import { Container, Service } from 'typedi';

function createCar() {
  return new Car('V8');
}

@Service({ factory: createCar })
class Car {
  constructor(public engineType: string) {}
}

export default function createUsingFactory() {
  // Getting service from the container.
  // Service will be created by calling the specified factory function.
  const car = Container.get(Car);

  console.log(car.engineType); // > "V8"
}
