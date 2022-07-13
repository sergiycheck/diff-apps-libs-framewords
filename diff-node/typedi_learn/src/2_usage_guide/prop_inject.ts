import 'reflect-metadata';
import { Container, Inject, Service } from 'typedi';

@Service()
class InjectedClass {}

@Service()
class ExampleClass {
  // this can also be like this, but
  // ts does not allow it
  // @Inject()
  // public injectedClass: InjectedClass

  constructor(
    @Inject()
    public injectedClass: InjectedClass
  ) {}
}

export default function propInject() {
  const instance = Container.get(ExampleClass);
  console.log(instance.injectedClass instanceof InjectedClass);
  // prints true as the instance of InjectedClass has been assigned to the `injectedClass` property by TypeDI
}
