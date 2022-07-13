import 'reflect-metadata';
import { Container, Service } from 'typedi';

@Service()
class DefaultSingletonClass {
  constructor() {
    console.log('singleton is being created!');
    // this line will be printed twice
  }
}

@Service({ transient: true })
class ExampleTransientClass {
  constructor() {
    console.log('transient is being created!');
    // this line will be printed twice
  }
}

export default function singletonVsTransient() {
  const instDefaultA = Container.get(DefaultSingletonClass);
  const instDefaultB = Container.get(DefaultSingletonClass);

  const instanceTransientA = Container.get(ExampleTransientClass);
  const instanceTransientB = Container.get(ExampleTransientClass);

  console.log(`instDefaultA === instDefaultB `, instDefaultA === instDefaultB);
  console.log(
    `instanceTransientA === instanceTransientB `,
    instanceTransientA === instanceTransientB
  );
}
