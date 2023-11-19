"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.routes();
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.status(200).json({
                message: 'Success accessing route'
            });
        });
    }
}
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log(`Mantab, berjalan di port ${port}`);
});
// const app = express();
// app.route('/').get((req, res) => {
// 	res.send({
// 		success: true,
// 		message: 'Berhasil mengakses route',
// 	});
// });
// const port = 8000;
// app.listen(port, () => {
// 	console.log(`Server berjalan di port ${port}`);
// });
