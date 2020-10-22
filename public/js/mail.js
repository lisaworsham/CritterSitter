// require('dotenv').config();
// const nodemailer = require('nodemailer');
//const mailGun = require('nodemailer-mailgun-transport');

$(document).ready(() => {

    const recipientEmailSearch = new URLSearchParams(window.location.search)
    const recipientEmail = recipientEmailSearch.get("email")
    const emailBody = $("textarea#emailInput")
    const sendButton = $("button#emailSendBtn")
    ///////////////////////
    //step 1 - transporter
    sendButton.on("click", event => {
        event.preventDefault()
        $.post("/api/email", {
            address: recipientEmail,
            message: emailBody.val()
        }).then(() => {
            window.location.replace("/members")
        })
    });
});


    //     let transporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         auth: {
    //             user: "critter.sitter.safe@gmail.com",
    //             pass: "CritterSitter#"
    //         }

    //     })

    // });

    // // const sendMail = (email, subject, text, cb) => {
    // //step 2 - e-mail
    // let mailOptions = {
    //     from: "critter.sitter.safe@gmail.com",
    //     to: ownerEmail,
    //     subject: "Critter Sitter Update",
    //     text: emailBodyInput.val()
    // };

    // // }
    // // step 3 - send mail
    // transporter.sendMail(mailOptions, function (err, data) {
    //     if (err) {
    //         cb(err, null);
    //         console.log('error!!! oh no!', err);
    //     } else {
    //         cb(null, data);
    //         console.log('email sent!!!');
    //     }
    // });


// could use this later for evalute errors...
// sendMail('', '', '', function(err, data) {
// });

// module.exports = sendMail;

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