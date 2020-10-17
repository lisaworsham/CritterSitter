// const sendMail = require("./mail");

// //add to appropriate post route example
// app.post('api:email', )(req, rest) => {
//     const { subject, email, text} = req.body};
//     console.log('Data: ', req.body);

//     sendMail(email, subject, text, function(err, data) {
//         if (err) {
//             resizeBy.status(500).json({ message: 'internal error'});
//         } else {
//             resizeBy.json({ message: 'Email sent!!!' });
//         }
//     });

// const mailgun = require("mailgun-js");
// const DOMAIN = 'mail.snilp.net';
// const mg = mailgun({apiKey: api_key, domain: DOMAIN});
// const data = {
// 	from: 'Excited User <me@samples.mailgun.org>',
// 	to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
// 	subject: 'Hello',
// 	text: 'Testing some Mailgun awesomness!'
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });


// //authentication
// const auth = {
//     auth: {
//         api_key: '8f5da7bd3ffc4f772d1b934fb66506d9-2fbe671d-f395369d',
//         domain: 'sandbox174ac68c4ea746d1b3162ec54929af36.mailgun.org'
//     }
// };

// //step 2 - e-mail
// const transporter = nodemailer.createTransport(mailGun());

// const mailOptions = {
//     from: 'shawnm74@gmail.com',
//     to: 'shawn_mrgn@outlook.com',
//     subject: 'Testing nodemailer v2',
//     text: 'does it work still???'
// };

// // //step 3 - send mail
// transporter.sendMail(mailOptions, function(err, data) {
//     if (err) {
//         console.log('error!!! oh no!', err);
//     } else {
//         console.log('email sent!!!');
//     }
// });