// const { DataTypes } = require("sequelize");
// const { DB } = require("../db");

// class OrderItems {
//   constrcutor() {
//     this.db = DB.connect;
//     this.schema = this.db.define(
//       "OrderItems",
//       {
//         OrderItemID: {
//           type: DataTypes.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//         },
//         OrderID: {
//           type: DataTypes.INTEGER,
//           references: {
//             model: "Orders",
//             key: "OrderID",
//           },
//         },
//         ProductID: {
//           type: DataTypes.INTEGER,
//           references: {
//             model: "Products",
//             key: "ProductID",
//           },
//         },
//         Quantity: {
//           type: DataTypes.INTEGER,
//         },
//         ItemPrice: {
//           type: DataTypes.DECIMAL(10, 2),
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

// module.exports = OrderItems;
