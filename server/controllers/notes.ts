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
  } else {
    return res.status(403).send('Not authorized');
  }
});

notesRouter.post('/edit', async (req: any, res: any) => {
  const auth = req.currentUser;
  const noteId = req.body.id;

  if (auth) {
    const noteObj = {
      title: req.body.title,
      content: req.body.content,
      uid: auth.uid,
    };
    Note.findByIdAndUpdate(noteId, noteObj)
      .then((r) => {
        return res.status(201).send(r);
      })
      .catch((error) => {
        return res.status(500).send({ error });
      });
  } else {
    return res.status(403).send('Not authorized');
  }
});

notesRouter.post('/delete', (req: any, res: any) => {
  const auth = req.currentUser;
  const noteId = req.body.id;

  if (auth) {
    Note.findByIdAndDelete(noteId)
      .then((r) => {
        return res.status(201).send(r);
      })
      .catch((error) => {
        return res.status(500).send({ error });
      });
  } else {
    return res.status(403).send('Not authorized');
  }
});

notesRouter.get('/', async (req, res) => {
  const auth = req.currentUser;
  if (auth) {
    const notes = await Note.find({ uid: auth.uid });
    return res.json(notes.map((note) => note.toJSON()));
  } else {
    return res.status(403).send('Not authorized');
  }
});

module.exports = notesRouter;
