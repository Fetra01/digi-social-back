const mongoose = require("mongoose");

const dbConnect = process.env.DB_USER_PASS;

mongoose
  .connect(
    process.env.CONNECT_DB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect MongoDB", err));
