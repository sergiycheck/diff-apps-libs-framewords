import { getRandomInt } from './getRandomInt';

export function getLocalGreeting(language) {
  switch (language) {
    case 'en':
      return 'Hello!';
    case 'es':
      return '¡Hola!';
    case 'ru':
      return 'Привет!';
    default:
      return '👋';
  }
}

export const languages = ['en', 'es', 'cn', 'fr', 'ru'];
export function pickLocale() {
  return languages[getRandomInt(0, languages.length)];
}
