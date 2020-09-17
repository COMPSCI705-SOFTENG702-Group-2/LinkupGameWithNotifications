var express = require('express');
var router = express.Router();
const Match = require('../models').match;

router.get('/api/match', function(req, res, next) {
	return Match.findAll().then((fetched) => {
  		res.status(200).json(fetched);
  	});
});

router.post('api/match', function(req, res) {
	Match.create({
		user: 'testuser',
		duration: '00:23',
		start: Date.now(),
		end: Date.now()
	});
});

module.exports = router;