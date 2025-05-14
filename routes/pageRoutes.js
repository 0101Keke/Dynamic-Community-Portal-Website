// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

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

module.exports = router;
