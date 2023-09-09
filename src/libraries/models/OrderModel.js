// const { DataTypes, Sequelize } = require("sequelize");
// const { DB } = require("../db");

// class Orders {
//   constrcutor() {
//     this.db = DB.connect;
//     this.schema = this.db.define(
//       "Orders",
//       {
//         OrderID: {
//           type: DataTypes.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//         },
//         UserID: {
//           type: DataTypes.INTEGER,
//           references: {
//             model: "Users",
//             key: "UserID",
//           },
//         },
//         OrderDate: {
//           type: DataTypes.DATE,
//         },
//         TotalAmount: {
//           type: DataTypes.DECIMAL(10, 2),
//         },
//         OrderStatus: {
//           type: DataTypes.ENUM(
//             "Initiated",
//             "Completed",
//             "Failed",
//             "Verified",
//             "Cancelled"
//           ),
//         },
//         PaymentMethod: {
//           type: DataTypes.STRING(50),
//         },
//         PaymentAmount: {
//           type: DataTypes.DECIMAL(10, 2),
//         },
//         TransactionDate: {
//           type: DataTypes.DATE,
//         },
//         TransactionID: {
//           type: DataTypes.STRING(50), 
//         },
//         TransactionHash: {
//           type: DataTypes.STRING(255), 
//         },
//         IsTransactionVerified: {
//           type: DataTypes.BOOLEAN,
//           defaultValue: false, 
//         },
//         createdAt: {
//           type: DataTypes.DATE,
//           defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
//         },
//         updatedAt: {
//           type: DataTypes.DATE,
//           defaultValue: Sequelize.literal(
//             "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
//           ),
//         },
//       },
//       {
//         hooks: {
//           beforeUpdate: (instance) => {
//             instance.updatedAt = new Date(); 
//           },
//         },
//       }
//     );
//   }
// }

// module.exports = Orders;
