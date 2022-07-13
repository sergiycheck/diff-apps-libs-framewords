import { Token } from 'typedi';
import { Factory } from './Factory';

// FactoryToken.ts
export const FactoryToken = new Token<Factory>('factories');
