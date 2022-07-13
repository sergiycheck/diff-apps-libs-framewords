import 'reflect-metadata';
import { Container, Service } from 'typedi';

@Service()
class InjectedClass {}

@Service()
class ExampleClass {
  constructor(public injectedClass: InjectedClass) {}
}

export default function constructorArgInject() {
  const instance = Container.get(ExampleClass);

  console.log(
    `instance.injectedClass instanceof InjectedClass`,
    instance.injectedClass instanceof InjectedClass
  );
  // prints true as TypeDI assigned the instance of InjectedClass to the property
}
