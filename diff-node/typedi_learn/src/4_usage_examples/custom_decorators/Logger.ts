import { Container } from 'typedi';
import { ConsoleLogger } from './ConsoleLogger';
// Logger.ts
export function Logger() {
  return function (object: any, propertyName: string, index?: number) {
    const logger = new ConsoleLogger();
    Container.registerHandler({
      object,
      propertyName,
      index,
      value: (containerInstance) => logger,
    });
  };
}
