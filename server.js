const express = require("express");
require("dotenv").config();
const errorhandler = require("./middleware/errorhandler");
const dbconnect = require("./config/dbconnection");

dbconnect();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/book", require("./Routes/bookroute"));
app.use(errorhandler);

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`);
});