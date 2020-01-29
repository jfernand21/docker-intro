const mongoose= require("mongoose");


//Connect to mongo DB
 const server = process.env.MONGODB_URI  || "localhost" ;
 const portDB = process.env.MONGODB_PORT || 27017;
 const DB = process.env.MONGODB_DB || "TEST"; 
console.info("connect to mongo", `mongodb://${server}:${portDB}/${DB}`)
mongoose.connect(`mongodb://${server}:${portDB}/${DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var DB_CONNECTION = mongoose.connection;

//Error handling if conncetion fails
DB_CONNECTION.on('error', console.error.bind(console, 'connection error:'));
//Check if successful connection is made
DB_CONNECTION.once('open', function callback () {
  console.log("MY DB Connected with Mongoose");
});