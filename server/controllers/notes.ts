import express from "express";

const notesRouter = express.Router();

notesRouter.post("/", (req: any, res: any) => {
  const auth = req.currentUser;
  if (auth) {
    console.log("authenticated!", auth);
    return res.send("Hi, from within the phones router POST");
  }
  return res.status(403).send("Not authorized");
});

module.exports = notesRouter;
