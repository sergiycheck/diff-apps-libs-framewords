import 'reflect-metadata';
import { Container, Token } from 'typedi';

const myToken = new Token('SECRET_VALUE_KEY');

Container.set(myToken, 'my-secret-value');
Container.set('my-config-key', 'value-for-config-key');
Container.set('default-pagination', 30);

export default function registerTokens() {
  // somewhere else in your application
  const tokenValue = Container.get(myToken);
  const configValue = Container.get('my-config-key');
  const defaultPagination = Container.get('default-pagination');

  console.log('tokenValue', tokenValue);
  console.log('configValue', configValue);
  console.log('defaultPagination', defaultPagination);
}
