import { Container, Service, Inject } from 'typedi';

// somewhere in your global app parameters
Container.set('authorization-token', 'RVT9rVjSVN');

@Service()
export class UserRepository {
  constructor(
    @Inject('authorization-token')
    public authorizationToken: string
  ) {}
}

export default function injectAuthToken() {
  const userRepo = Container.get(UserRepository);
  console.log('userRepo.authorizationToken', userRepo.authorizationToken);
}
