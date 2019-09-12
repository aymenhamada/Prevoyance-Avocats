const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });


exports.homePage =  (req, res) => {
    res.render('index');
}


exports.registerPage = (req, res) => {
    res.render('register');
}

exports.loginPage = (req, res) => {
    res.render('login');
}

exports.fakeRegister = (req, res) => {
    res.redirect('/login');
}

exports.fakeLogin = (req, res) => {
    res.redirect('/');
}

exports.sendEmail = async (req, res) =>{
     await transporter.sendMail({
        from: req.body.email, // sender address
        to: process.env.MAIL_USER, // list of receivers
        subject: `${req.body.name} Prevoyance Avocat`, // Subject line
        text: `${req.body.email} vous a contactez\n Voici son message: ${req.body.message}`, // plain text body
      });
    res.redirect('/');
}

exports.comparateurPage = (req, res) => {
    res.render('comparateur');
}

exports.droitPage = (req, res) =>{
    setTimeout(function(){
        res.render('droit');
    }, 2000)
}