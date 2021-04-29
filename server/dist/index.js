"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors = require("cors");
require("dotenv").config();
const notesRouter = require("./controllers/notes.ts");
const decodeIDToken = require("./authToken");
const app = express_1.default();
const PORT = 8081;
app.use(cors());
app.use("/api", notesRouter);
app.use(decodeIDToken);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
mongoose_1.default
    .connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_NAME}.qicfd.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log("Connected to mongodb");
})
    .catch((err) => {
    console.log("Error connecting to mongodb", err.message);
});
//# sourceMappingURL=index.js.map