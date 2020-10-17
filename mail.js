require('dotenv').config(); 
const nodemailer = require ('nodemailer');
//const mailGun = require('nodemailer-mailgun-transport');

///////////////////////
//step 1 - transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const sendMail = (email, subject, text, cb) => {
    //step 2 - e-mail
    let mailOptions = {
        from: email,
        to: 'shawn_mrgn@outlook.com, lisa.r.hyndman@gmail.com, allen.dehoff21@gmail.com',
        subject,
        text
    };

    //step 3 - send mail
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
            //console.log('error!!! oh no!', err);
        } else {
            cb(null, data);
            //console.log('email sent!!!');
        }
    });
}

// could use this later for evalute errors...
// sendMail('', '', '', function(err, data) {
// });

module.exports = sendMail;

// test locally worked
// step 2 - e-mail
// let mailOptions = {
//     from: 'shawnm74@gmail.com',
//     to: 'shawn_mrgn@outlook.com, lisa.r.hyndman@gmail.com, allen.dehoff21@gmail.com',
//     subject: 'Testing nodemailer',
//     text: 'does it work???'
// };

// //step 3 - send mail
// transporter.sendMail(mailOptions, function(err, data) {
//     if (err) {
//         console.log('error!!! oh no!', err);
//     } else {
//         console.log('email sent!!!');
//     }
// });