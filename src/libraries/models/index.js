const { bgGreen } = require("colors");
const { DB } = require("../connect");
const UserModel = require("./UserModel");


class Models{
    constructor(db){
        this.db = db;
    }

    async migrate(){
        return new Promise(async(resolve, reject) => {
            try{
                const database = DB.connection
                // console.log(database,bgGreen)
                await database.sync({force:true})
                resolve("Migration is successfull");
            }catch (err) {
                reject(`Unsuccessfull Migration ${err}`);
            }
           
        });
    }
}


    // async migrate(force){
    //         try{
    //             await this.db.sync({force})
    //             return "Migration is successfull"
    //         }catch (err) {
    //             return `Unsuccessfull Migration ${err}`
    //         }
           
    //     }
    // }


module.exports = {Models, UserModel}