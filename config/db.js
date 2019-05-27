const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://test:1234@cluster0-7qnsa.mongodb.net/test6?retryWrites=true";

mongoose.connect(connectionString, e => {
  if (e) console.log("Db connection error", e);
});
mongoose.connection.on("connected", () => console.log("Db connected"));
mongoose.connection.on("error", e => console.log("Db error", e));

module.exports = mongoose;
