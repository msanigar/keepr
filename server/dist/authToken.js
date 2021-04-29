"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const serviceAccount_json_1 = __importDefault(require("./serviceAccount.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount_json_1.default),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
});
function decodeIDToken(req, res, next) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const header = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
        if (header !== "Bearer null" &&
            ((_c = (_b = req.headers) === null || _b === void 0 ? void 0 : _b.authorization) === null || _c === void 0 ? void 0 : _c.startsWith("Bearer "))) {
            const idToken = req.headers.authorization.split("Bearer ")[1];
            try {
                const decodedToken = yield firebase_admin_1.default.auth().verifyIdToken(idToken);
                req.currentUser = decodedToken;
            }
            catch (err) {
                console.log(err);
            }
        }
        next();
    });
}
module.exports = decodeIDToken;
//# sourceMappingURL=authToken.js.map