import {MongoClient} from 'mongodb';
const settings = {
  mongoConfig: {
    serverUrl: 'mongodb://127.0.0.1:27017/', 
    // mongodb://localhost:27017 改成了 mongodb://127.0.0.1:27017/
    database: 'movies'
  }
};
const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

const dbConnection = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl);
    _db = _connection.db(mongoConfig.database);
  }

  return _db;
};
const closeConnection = async () => {
  await _connection.close();
};

export {dbConnection, closeConnection};
