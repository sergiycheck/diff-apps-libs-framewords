import mongoose from 'mongoose';

export type Book = {
  name: string;
  id: number;
  description: string;
  createdAt: Date;
};

export type BooksDocument = mongoose.Document & Book;

const booksSchema = new mongoose.Schema<Book>({
  name: String,
  id: { type: Number, index: true, unique: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

// Note: OverwriteModelError: Cannot overwrite `Books` model once compiled. error
//
export const Books =
  mongoose.models.books || mongoose.model<BooksDocument>('books', booksSchema);
