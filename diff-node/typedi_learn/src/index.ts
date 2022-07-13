import 'reflect-metadata';
import injectAuthToken from './3_namedService/inject_auth_token';
import chooseHowToFake from './3_namedService/provide_fake_deps_for_testing';
import circularDeps from './4_usage_examples/circular_deps/circular_deps_working_but_not_perfect';
import SaveUserCustomDecorators from './4_usage_examples/custom_decorators/saveUser';
import createUsingFactoryClass from './4_usage_examples/factory_class';
import storingInDifferentContainers from './4_usage_examples/multiple_containers_scoped_containers/storingInDifferentContainers';
import createUsingFactory from './4_usage_examples/using_factory_create_service';
import appUsingServiceGroups from './4_usage_examples/using_service_groups/app_user_service_groups';
// import containerGet from './usage_guide/container_get';
// import singletonVsTransient from './2_usage_guide/singleton_transient';
// import initContainerAndMake from './3_namedService/named_service';
// import constructorArgInject from './usage_guide/constructor_arg_inject';
// import propInject from './usage_guide/prop_inject';
// import getInstanceAndPrintMessage from './getting_started/example1';
// import registerTokens from './usage_guide/registerTokens';

function defaultCheckingIfBuildSuccessful() {
  console.log('should be builded');
}

function main() {
  defaultCheckingIfBuildSuccessful();

  // example from website docs
  // getInstanceAndPrintMessage();
  // registerTokens();
  // constructorArgInject();
  // propInject();
  // containerGet();
  // singletonVsTransient();

  // examples from github docs
  // initContainerAndMake();
  // injectAuthToken();
  // chooseHowToFake();
  // createUsingFactory();
  // createUsingFactoryClass();
  // circularDeps();
  // SaveUserCustomDecorators();
  // appUsingServiceGroups();
  storingInDifferentContainers();
}

main();
