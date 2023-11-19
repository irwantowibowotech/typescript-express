import express, {Application, Request, Response} from 'express';

class App {
	public app: Application;

	constructor() {
		this.app = express();
		this.routes();
	}

	protected routes(): void {
		this.app.route('/').get((req: Request, res: Response) => {
			res.status(200).json({
				message: 'Success accessing route'
			});
		});
	}
}

const port: number = 8000;
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