import { QuestionRepository } from './questions.repository';
import { Service } from 'typedi';

@Service()
export class QuestionController {
  constructor(protected questionRepository: QuestionRepository) {}

  save(question: string) {
    this.questionRepository.save(question);
  }
}
