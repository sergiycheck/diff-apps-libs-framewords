import Container from 'typedi';
import { UserRepository } from './UserRepository';

export default function SaveUserCustomDecorators() {
  const userRepo = Container.get(UserRepository);
  userRepo.save({ firstName: 'user f 1', secondName: 'user s 1' });
}
