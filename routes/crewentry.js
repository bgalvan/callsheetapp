const { Router } = require('express');
const pool = require('../db');
const router = Router();

// router.get('/', function(req, res){ 
//  	
// });

router.get('/', function(req, res){
  var html = '<form action="/crewentry" method="post">' +
               'Enter your name:' +
               '<input type="text" name="name" placeholder="..." />' +
               '<br>' +
               'Enter your phone number:' +
               '<input type="text" name="phone" placeholder="..." />' +
               '<br>' +
               'Enter your email:' +
               '<input type="text" name="email" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';

  res.send(html);
});

router.post('/', function(req, res, next){ 
 	var name = req.body.name;
 	var phone = req.body.phone;
 	var email = req.body.email;
 	console.log(name);
 	console.log(phone);
 	console.log(email);
 	pool.query(
 		'INSERT INTO crew(name, phone, email) VALUES($1, $2, $3)',
 		[name, phone, email],
 		(err, res, next) => {
 			if (err) return next(err);
 		}
 	);
});




module.exports = router;
