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

notesRouter.post('/edit', async (req: any, res: any) => {
  const auth = req.currentUser;
  const noteId = req.body.id;

  // if (auth) {
  //   const noteObj = {
  //     title: req.body.title,
  //     content: req.body.content,
  //     uid: auth.uid,
  //   };
  //   const note = new Note(noteObj);
  //   const editedNote = note.save({ id: noteId }, noteObj);
  //   return res.status(201).json(editedNote);
  // }

  return res.json(noteId);
  return res.status(403).send('Not authorized');
});

notesRouter.post('/delte', (req: any, res: any) => {});

notesRouter.get('/', async (req, res) => {
  const auth = req.currentUser;
  if (auth) {
    const notes = await Note.find({ uid: auth.uid });
    return res.json(notes.map((note) => note.toJSON()));
  }
  return res.status(403).send('Not authorized');
});

module.exports = notesRouter;
