// file types.ts

const TYPES = {
  Warrior: Symbol.for('Warrior'),
  Weapon: Symbol.for('Weapon'),
  ThrowableWeapon: Symbol.for('ThrowableWeapon'),
};

export { TYPES };

// It is recommended to use Symbols but InversifyJS also support the usage of Classes and string literals
//(please refer to the features section to learn more).
