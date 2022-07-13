import { Service } from 'typedi';

// services to be completely global
// and not be container-specific, you can mark them as global
// this global service will be the same instance across all containers
@Service({ global: true })
export class QuestionUtils {}
