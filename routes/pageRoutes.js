// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const contactMessages = [];

router.get('/', (req, res) => {
    const data = {title: 'home'};
    res.render('Pages/home',data);
});


router.get('/about', (req, res) => {
    const data = {title: 'about'};
    res.render('pages/about',data);
});

router.get('/events', (req, res) => {
    const data = {title: 'events'};
    res.render('pages/events',data);
});

router.get('/contact', (req, res) => {
    const data = {title: 'contact'};
    res.render('pages/contact',data);
});

router.get('/thankyou', (req, res) => {
    const data = {title: 'thankyou'};
    res.render('pages/thankyou',data);
});

router.post('contact', (req, res) => {
    const {name, email, message} = req.body;
    contactMessages.push({name, email, message});
    res.redirect('/thankyou');
});

module.exports = router;
