import { Handler, Context, APIGatewayEvent } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';
import { Books } from './model';
import BooksController from './controller/books';
import connectToMongoDb from './model/mongoose-db';

console.log('NODE_ENV', process.env.NODE_ENV);

const dotenvPath = path.join(
  __dirname,
  '../',
  `config/.env.${process.env.NODE_ENV}`
);
dotenv.config({
  path: dotenvPath,
});

connectToMongoDb();

const booksController = new BooksController(Books);

export const create: Handler = (event: APIGatewayEvent, context: Context) =>
  booksController.create(event, context);

export const update: Handler = (event: APIGatewayEvent) =>
  booksController.update(event);

export const find: Handler = () => booksController.find();

export const findOne: Handler = (event: APIGatewayEvent, context: Context) =>
  booksController.findOne(event, context);

export const deleteOne: Handler = (event: APIGatewayEvent) =>
  booksController.deleteOne(event);
