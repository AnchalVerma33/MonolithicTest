// const { Sequelize } = require("sequelize");
// const {configVar} = require("../../config/index");

// let DB = {};


// const connection = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const sequelize = new Sequelize(configVar.DB_NAME, configVar.DB_USER, configVar.DB_PASSWORD, {
//         host: configVar.DB_HOST,
//         // port: configVar.DB_PORT,
//         dialect: "postgres",
//         logging : false
//       });
//       await sequelize.authenticate();
//       console.log("Connection has been established successfully.".bgBlue);
//       DB["connect"] = sequelize;
//       resolve(sequelize);
//     } catch (err) {
//       console.log(err);
//       reject(`Unable to connect to the database:${err}`.bgRed);
//     }
//   });
// };

// module.exports = { connection, DB };

const { Sequelize } = require("sequelize");

const {
	DB_NAME,
	DB_PASSWORD,
	DB_HOST,
	DB_USERNAME,
} = require("../../config/index");

console.log(DB_NAME,DB_PASSWORD,
	DB_HOST,
	DB_USERNAME,)

let DB = {};

const connectDB = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
				host: '127.0.0.1',
				dialect: 'postgres',
				port : 5432,
				logging: false,
			});
			await sequelize.authenticate();
			console.log("Database connected".cyan);
			// console.log(sequelize)
			DB["connection"] = sequelize;
			resolve(sequelize);
		} catch (e) {
			console.log(e);
			reject(`Error while connecting db ${e}`);
		}
	});
};

module.exports = { connectDB, DB };