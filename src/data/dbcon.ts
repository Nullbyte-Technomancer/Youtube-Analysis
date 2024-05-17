import { Sequelize } from 'sequelize';

// Create a new instance of Sequelize, specifying the SQLite dialect and the path to the SQLite file
export const dbconn = new Sequelize({
  dialect: 'sqlite',
  storage: 'src/data/database.sqlite',
});

export default dbconn;


// Test the connection
export const testConnection = async () => {
  try {
    await dbconn.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
