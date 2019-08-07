const { Router } = require('express');

const router = Router();

var nodemailer = require('nodemailer');

var json_data = require('../data/call.json');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'UniteMailerBot@gmail.com',
    pass: 'Steinway48'
  }
});

var mailOptions = {
  from: 'UniteMailerBot@gmail.com',
  to: 'bgalvan10@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'that was easy'
};

mailOptions.text = JSON.stringify(json_data) + ' this is a test. event data served from a postgres database and sent via a node.js web app. B==D.'

router.get('/', function(req, res){
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

module.exports = router;
