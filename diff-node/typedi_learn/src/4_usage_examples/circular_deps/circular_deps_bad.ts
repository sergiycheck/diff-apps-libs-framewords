import { Container, Inject, Service } from 'typedi';

// Car.ts
@Service()
export class Car {
  @Inject()
  engine: Engine;
}

// Engine.ts
@Service()
export class Engine {
  @Inject()
  car: Car;
}

//circular deps between Engine and Car, one of them will be undefined
