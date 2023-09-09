// const { DataTypes } = require('sequelize');
// const { DB } = require("../db");

// class ProductModel {
//   constructor() {
//     this.db = DB.connect;
//     this.schema = this.db.define('Product', {
//       product_id: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//         allowNull: false,
//         primaryKey: true,
//       },
//       product_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       product_image: {
//         type: DataTypes.STRING, 
//       },
//       product_description: {
//         type: DataTypes.STRING,
//       },
//       price: {
//         type: DataTypes.DECIMAL(10, 2),
//         allowNull: false,
//       },
//       quantity: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         validate: {
//           min: 0, 
//         },
//       },
//       createdAt: {
//         type: DataTypes.DATE,
//         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
//         allowNull: false,
//       },
//       updatedAt: {
//         type: DataTypes.DATE,
//         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
//         allowNull: false,
//       },
//     },{
//       hooks: {
//         beforeUpdate: (instance, options) => {
//           instance.updatedAt = new Date(); 
//         },
//       },
//     });
//   }
// }

//   module.exports = ProductModel;