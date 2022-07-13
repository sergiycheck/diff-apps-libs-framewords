import { Container, Service } from 'typedi';

interface LoggerInterface {
  log(...args: any): void;
}

@Service()
class LoggerService implements LoggerInterface {
  log(...args: any) {
    console.log(...args);
  }
}

@Service()
class CarFactory {
  constructor(public logger: LoggerService) {}

  create() {
    return new Car('BMW', this.logger);
  }
}

@Service({ factory: [CarFactory, 'create'] })
class Car {
  constructor(public model: string, public logger: LoggerInterface) {}

  logModelName() {
    this.logger.log(` this.model `, this.model);
  }
}

export default function createUsingFactoryClass() {
  const car = Container.get(Car);
  car.logModelName();
}
