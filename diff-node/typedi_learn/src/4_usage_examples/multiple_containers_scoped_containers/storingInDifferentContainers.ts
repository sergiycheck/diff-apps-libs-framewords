import { QuestionController } from './questions.controller';
import { Container } from 'typedi';

export default function storingInDifferentContainers() {
  const request1 = { param: 'question1' };
  const controller1 = Container.of(request1.param).get(QuestionController);
  controller1.save('Timber');
  Container.reset(request1.param);

  const request2 = { param: 'question2' };
  const controller2 = Container.of(request2.param).get(QuestionController);
  controller2.save('');
  Container.reset(request2.param);

  // controller1 and controller2 are completely different instances
}
