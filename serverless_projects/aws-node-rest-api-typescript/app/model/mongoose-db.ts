import mongoose from 'mongoose';

export default function connectToMongoDb() {
  // console.log('process.env.DB_URL', process.env.DB_URL);
  // console.log('process.env.DB_NAME', process.env.DB_NAME);
  mongoose.connect(process.env.DB_URL, {
    dbName: process.env.DB_NAME,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
  });
}
