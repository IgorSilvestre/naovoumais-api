import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
class Database {
  private connection: any;

  constructor() {
    this.mongo();
  }

  getConnection() {
    return this.connection;
  }

  mongo() {
    const { MONGO_CONNECTION_STRING, ENABLE_MONGOOSE_LOGGING } = process.env;

    if (!MONGO_CONNECTION_STRING) throw new Error('Necessário configurar conexão com banco de dados');

    console.log('Conectando no Mongo:', MONGO_CONNECTION_STRING);

    if (ENABLE_MONGOOSE_LOGGING == 'true') {
      mongoose.set('debug', true);
    }

    this.connection = mongoose.connect(
      MONGO_CONNECTION_STRING,
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      } as ConnectOptions,
      function (err: any) {
        if (err) {
          console.log('Erro conectando no Mongo:', err.reason);
          throw err;
        }
        console.log('Conectado no Mongo!');
      },
    );
  }
}

export default new Database();
