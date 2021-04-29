"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notesRouter = express_1.default.Router();
notesRouter.post("/", (req, res) => {
    const auth = req.currentUser;
    if (auth) {
        console.log("authenticated!", auth);
        return res.send("Hi, from within the phones router POST");
    }
    return res.status(403).send("Not authorized");
});
module.exports = notesRouter;
//# sourceMappingURL=notes.js.map