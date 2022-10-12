import {Dialect, Sequelize} from 'sequelize'

const dbName = "test_db";
const dbUser = "root";
const dbHost = "192.168.31.229";
const dbDriver = 'mysql';
const dbPassword = "123123";

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver/* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
})


sequelizeConnection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
})

export default sequelizeConnection
