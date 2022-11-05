export {};
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const notesRouter = require('./controllers/notes.ts');
const decodeIDToken = require('./authToken');

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(decodeIDToken);
app.use(express.json());
app.use('/api', notesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_NAME}.qicfd.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => {
    console.log('Connected to mongodb');
  })
  .catch((err) => {
    console.log('Error connecting to mongodb', err.message);
  });
