import { Model } from 'mongoose';
import { Book } from '../model';
import { CreateBookDTO, UpdateBookDTO } from '../model/dto/dtos.dto';

class BooksService {
  private books: Model<Book>;

  constructor(books: Model<Book>) {
    this.books = books;
  }

  protected async createBook(params: CreateBookDTO): Promise<object> {
    try {
      const result = await this.books.create({
        name: params.name,
        id: params.id,
      });

      return result;
    } catch (err) {
      console.error(err);

      throw err;
    }
  }

  protected updateBooks(id: number, data: UpdateBookDTO) {
    return this.books.findOneAndUpdate(
      { id },
      { ...data },
      { runValidators: true, new: true }
    );
  }

  protected findBooks() {
    return this.books.find({});
  }

  protected findOneBookById(id: number) {
    return this.books.findOne({ id });
  }

  protected deleteOneBookById(id: number) {
    return this.books.deleteOne({ id });
  }
}

export default BooksService;
