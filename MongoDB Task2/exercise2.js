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
  
// Task 2: get all the published frontend and backend courses sort them by their price in a descending order, from most expensive to least expensive, pick only their name and author, and display them on the console.

async function fetchRecord(){
    let details = await technologies
    .find()
    .sort("-price")
    .select("name author");
     console.log(details);
}
fetchRecord();
