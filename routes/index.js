const { Router } = require('express');

const crewentry = require('./crewentry');
const crew = require('./crew');
const sendcall = require('./sendcall');
const calls = require('./calls');

const router = Router();


router.use('/crewentry', crewentry);
router.use('/crew', crew);
router.use('/sendcall', sendcall);
router.use('/calls', calls);


module.exports = router;