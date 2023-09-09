const express = require("express");
const configVar = require("./config");
const { connectDB } = require("./libraries/connect");
const { Models } = require("./libraries/models");
require("colors")

const StartServer = async () => {
  try {
    const PORT = configVar.PORT || 3000; 
    const app = express();
    const dbConnection = await connectDB();
    const models = new Models(dbConnection)
    const migrated = await models.migrate();
   //  console.log(migrated)
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`.yellow);
    });
  } catch (e) {
    console.log(e);
    process.exit(0);
  }
};


StartServer();


