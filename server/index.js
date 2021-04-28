const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const notesRouter = require("./controllers/notes.ts");

const app = express();

app.use("/api", notesRouter);

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_NAME}.qicfd.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log("Error connecting to mongodb", err.message);
  });
