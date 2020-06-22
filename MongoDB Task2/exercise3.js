let mongoose = require("mongoose");


mongoose
.connect("mongodb://localhost:27017/mongo-exercises", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((error) => console.log(`failure to connect db ${error}`));



let recordSchema = mongoose.Schema({
    name: { type: String },
    author: { type: String },
    tags: [String],
    isPublished: { type: Boolean },
    price:{type: Intl},
    date: { type: Date, default: Date.now() },
  });
  
let technologies = mongoose.model("courses", recordSchema);
  
// Exercise 3: get all the published courses that are 15 dollars or less or have the word 'by' in their title.

async function fetchRecord(){
    let details = await technologies
    .find()
     .and([{isPublished: true},{price: { $lte: 15 }},{name:/by/}]);
     console.log(details);
  }
  fetchRecord();

