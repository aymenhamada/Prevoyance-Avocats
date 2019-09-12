const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');
const { catchErrors } =  require('../handlers/errorHandlers');

router.get('/', siteController.homePage);


router.get('/register', siteController.registerPage)

router.get('/login', siteController.loginPage)

router.post('/fakeRegister', siteController.fakeRegister)

router.post('/fakeLogin', siteController.fakeLogin)


router.post('/sendEmail', siteController.sendEmail);

router.get('/comparateur', siteController.comparateurPage);

router.get('/droit', siteController.droitPage);

module.exports = router;
