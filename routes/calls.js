const { Router } = require('express');
const pool = require('../db');
const router = Router();
const fs = require('fs');

router.get('/', (request, response, next) => {
	pool.query('SELECT * FROM calls ORDER by id ASC', (err, res) => {
		if (err) return next(err);

		response.json(res.rows);
	});
});

const writeCall = json => {
	fs.writeFile('./data/call.json', JSON.stringify(json), err => console.log(err));
	}
//save specific call into json data to be served later
router.get('/:id', (request, response, next) => {
	const { id } = request.params;

	pool.query('SELECT * FROM calls WHERE id = $1', [id], (err, res) => {
	if (err) return next(err);

	writeCall(res.rows);

	response.json(res.rows);
	});
});

module.exports = router;