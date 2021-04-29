const express = require('express');
const notesRouter = express.Router();

const Note = require('../models/note');

notesRouter.post('/', (req: any, res: any) => {
  const auth = req.currentUser;
  if (auth) {
    const noteObj = {
      title: req.body.title,
      content: req.body.content,
      uid: auth.uid,
    };
    const note = new Note(noteObj);
    const savedNote = note.save();
    return res.status(201).json(savedNote);
  }
  return res.status(403).send('Not authorized');
});

notesRouter.get('/', async (req, res) => {
  const auth = req.currentUser;
  if (auth) {
    const notes = await Note.find({ uid: auth.uid });
    return res.json(notes.map((note) => note.toJSON()));
  }
  return res.status(403).send('Not authorized');
});

module.exports = notesRouter;
