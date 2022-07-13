import { LoggerInterface } from './LoggerInterface';
import { Service } from 'typedi';
import { Logger } from './Logger';

export class User {
  firstName: string;
  secondName: string;
}

// UserRepository.ts
@Service()
export class UserRepository {
  constructor(@Logger() private logger: LoggerInterface) {}

  save(user: User) {
    this.logger.log(
      `user ${user.firstName} ${user.secondName} has been saved.`
    );
  }
}
