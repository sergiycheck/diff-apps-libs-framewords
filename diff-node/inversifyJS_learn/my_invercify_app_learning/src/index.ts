import 'reflect-metadata';
import resolveCircularDeps from './support_for_classes/known_limitations/using_with_symbols/resolve-deps';

function defaultCheckingIfBuildSuccessful() {
  console.log('should be builded');
}

function main() {
  defaultCheckingIfBuildSuccessful();
  resolveCircularDeps();
}

main();
