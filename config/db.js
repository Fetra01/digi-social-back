const mongoose = require("mongoose");

const dbConnect = process.env.DB_USER_PASS;

mongoose
  .connect(
    "mongodb+srv://" + dbConnect + "@cluster0.k855q.mongodb.net/projet-mern",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect MongoDB", err));
