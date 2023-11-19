import express from 'express';

const app = express();

app.route('/').get((req, res) => {
	res.send({
		success: true,
		message: 'Berhasil mengakses route',
	});
});

const port = 8000;

app.listen(port, () => {
	console.log(`Server berjalan di port ${port}`);
});