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
  
// Task 1(i): write a program and get all the published backend courses, in our database
async function fetchRecord(){
    let details = await technologies
    .find();
    console.log(details);
}
//fetchRecord();

// Task 1(ii): sort them by their name, and pick only their name and author properties
async function sortbynameRecord(){
    let details = await technologies
    .find()
    .sort("name")
    .select("name author");
    console.log(details);
}
//sortbynameRecord();


