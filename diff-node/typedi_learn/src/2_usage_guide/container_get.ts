import 'reflect-metadata';
import { Container, Inject, Service, Token } from 'typedi';

const myToken = new Token('SECRET_VALUE_KEY');

@Service()
class InjectedClass {}

@Service()
class ExampleClass {
  constructor(
    @Inject()
    public injectedClass: InjectedClass
  ) {}
}

// Every registered service by default is a singleton.

/** Tokens must be explicity set in the Container with the desired value. */
Container.set(myToken, 'my-secret-value');
/** String identifier must be explicity set in the Container with the desired value. */
Container.set('my-dependency-name-A', InjectedClass);
Container.set('my-dependency-name-B', 'primitive-value');

export default function containerGet() {
  // a class without dependencies can be required
  const injectedClassInstance = Container.get(InjectedClass);
  console.log('injectedClassInstance', injectedClassInstance);

  // a class with dependencies can be required and dependencies will be resolved
  const exampleClassInstance = Container.get(ExampleClass);
  console.log('exampleClassInstance', exampleClassInstance);

  // tokenValue will be 'my-secret-value'
  const tokenValue = Container.get(myToken);
  console.log('tokenValue', tokenValue);

  // stringIdentifierValueA will be instance of InjectedClass
  const stringIdentifierValueA = Container.get('my-dependency-name-A');
  console.log('stringIdentifierValueA', stringIdentifierValueA);

  // stringIdentifierValueB will be 'primitive-value'
  const stringIdentifierValueB = Container.get('my-dependency-name-B');
  console.log('stringIdentifierValueB', stringIdentifierValueB);
}
