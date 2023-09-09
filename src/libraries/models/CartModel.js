// const { DataTypes } = require("sequelize");
// const { DB } = require("../db");

// class Cart {
//   constrcutor() {
//     this.db = DB.connect;
//     this.schema = this.db.define(
//       "Cart",
//       {
//         id: {
//           allowNull: false,
//           autoIncrement: true,
//           primaryKey: true,
//           type: DataTypes.INTEGER,
//         },
//         userid: {
//           type: DataTypes.UUID,
//           references: {
//             model: "User",
//             key: "uuid",
//           },
//           allowNull: false,
//         },
//         productid: {
//           type: DataTypes.UUID,
//           references: {
//             model: "Product",
//             key: "product_id",
//           },
//           allowNull: false,
//         },
//         amount: {
//           type: DataTypes.DECIMAL(10, 2),
//         },
//         quantity: {
//           type: DataTypes.INTEGER,
//           validate: {
//             min: 1, 
//           },
//           defaultValue : 1,
//         },
//         created_at: {
//           type: DataTypes.DATE,
//         },
//         updated_at: {
//           type: DataTypes.DATE,
//         },
//       },
//       {
//         hooks: {
//           beforeUpdate: (instance) => {
//             instance.updatedAt = new Date();
//           },
//         },
//         indexes: [
//             {
//               unique: true, 
//               fields: ["userid"],
//             },
//           ],
//       }
//     );
//   }
// }



// module.exports = Cart
