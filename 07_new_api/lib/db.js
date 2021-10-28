
const mongoose = require("mongoose");
const config = require("dotenv").config();
const connect = () =>
  new Promise((resolve, reject) => {
    mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      //	"mongodb+srv://database_g13:XShgJjWVSQudMfD9@cluster0.uk0hp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	    {
        useNewUrlParser: true,
      }
    );
  //console.log(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    const db = mongoose.connection;

    db.on("open", () => {
      console.warn("Connection successfull🤩");
      resolve(mongoose);
    });

    db.on("error", (error) => {
      console.error("Connection failed ☢", error);
      reject(error);
    });
  });

module.exports = {
  connect,
};