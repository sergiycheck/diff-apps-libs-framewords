import { Service } from 'typedi';

@Service()
export class QuestionRepository {
  save(question: string) {
    console.log('saving from QuestionRepository', question);
  }
}
