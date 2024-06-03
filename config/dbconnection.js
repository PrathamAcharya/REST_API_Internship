const mongoose = require("mongoose");           //----------if you are using atlas then see dipesh malvia's video for establishing 
                                                          //mongodb connection
const dbconnect = async () => {
    try{
        const connect = await mongoose.connect("mongodb://localhost:27017/mybooks-backend");
        console.log("Connection established:", connect.connection.host, connect.connection.name);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = dbconnect;