require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 4050;
app.use(express.json());

app.use("/groups", require("./routes/groups.route"));
app.use("/students", require("./routes/students.route"));
app.use("/notes", require("./routes/notes.route"));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_SERVER);
    console.log("MongoDB connected");
  } catch (e) {
    console.log("ERROR", e.message);
  }
};
app.listen(port, () => {
  console.log("app listening at port 4050");
});

connectDB();
