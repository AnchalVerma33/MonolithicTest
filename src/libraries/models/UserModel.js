// const { DB } = require("../db");
// const { DataTypes } = require("sequelize");

// class UserModel {
//   constructor() {
//     this.db = DB.connect;
//     this.schema = this.db.define(
//       "User",
//       {
//         uuid: {
//           type: DataTypes.UUID,
//           defaultValue: DataTypes.UUIDV4,
//           allowNull: false,
//           primaryKey: true,
//         },
//         first_name: {
//           type: DataTypes.STRING,
//         },
//         last_name: {
//           type: DataTypes.STRING,
//         },
//         email: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           unique: true,
//         },
//         password: {
//           type: DataTypes.STRING(355),
//         },
//         phone_number: {
//           type: DataTypes.STRING(355),
//           unique : true,
//           allowNull : false
//         },
//         isValidated: {
//           type: DataTypes.BOOLEAN,
//           defaultValue: false,
//         },
//         gender: {
//           type: DataTypes.STRING(255),
//         },
//         createdAt: {
//           type: Sequelize.DATE,
//           defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
//           allowNull: false,
//         },
//         updatedAt: {
//           type: Sequelize.DATE,
//           defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
//           allowNull: false,
//         },
//       },
//       {
//         hooks: {
//           // Hook to update the updatedAt field before an update
//           beforeUpdate: (user) => {
//             user.updatedAt = new Date(); // Update the updatedAt field with the current timestamp
//           },
//         },
//       }
//     );
//   }
// }


const { DataTypes } = require("sequelize");
const { DB } = require("../connect");
class UserModel {
	constructor() {
		this.db = DB.connection;
		this.schema = this.db.define(
			"Users",
			{
				id: {
					type: DataTypes.UUID,
					defaultValue: DataTypes.UUIDV4,
					primaryKey: true,
				},
				first_name: {
					type: DataTypes.STRING,
				},
				last_name: {
					type: DataTypes.STRING,
				},
				email: {
					type: DataTypes.STRING,
					unique: true,
				},
				password: {
					type: DataTypes.STRING(355),
				},
				phone_number: {
					type: DataTypes.STRING(355),
				},
				gender: {
					type: DataTypes.STRING(255),
				},
				salt: {
					type: DataTypes.STRING(255),
				},
				verified: {
					type: DataTypes.BOOLEAN,
					defaultValue: false,
				},
				email_notification: {
					type: DataTypes.BOOLEAN,
					defaultValue: true,
				},
				sms_notification: {
					type: DataTypes.BOOLEAN,
					defaultValue: true,
				},
				created_at: {
					type: DataTypes.DATE,
					defaultValue: this.db.literal("CURRENT_TIMESTAMP"),
					allowNull: false,
				},
				updated_at: {
					type: DataTypes.DATE,
					defaultValue: this.db.literal("CURRENT_TIMESTAMP"),
					allowNull: false,
				},
			},
			{
				timestamps: false, // Disable automatic timestamps (createdAt, updatedAt)
				hooks: {
					beforeUpdate(user) {
						user.setDataValue("updated_at", new Date()); // Update the updated_at field before saving
					},
				},
			},
			{
				indexes: [
					{
						unique: true, // Ensures that the values in this index are unique
						fields: ["email"], // The field(s) you want to create an index on
					},
				],
			}
		);
	}
}

module.exports = UserModel;
