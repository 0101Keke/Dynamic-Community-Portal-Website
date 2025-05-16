// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const eventsData = require('../models/Event');

const contactMessages = [];

router.get('/', (req, res) => {
    const data = {title: 'home', events: eventsData};
    res.render('pages/home',data);
});


router.get('/about', (req, res) => {
    const data = {title: 'about'};
    res.render('pages/about',data);
});

router.get('/events', (req, res) => {
    const data = {title: 'events', events: eventsData};
    res.render('pages/events',data);
});

router.get('/contact', (req, res) => {
    const data = {title: 'contact'};
    res.render('pages/contact',data);
});

router.post('/contact', (req, res) => {
    const {name, email, message} = req.body;
    contactMessages.push({name, email, message});
    res.redirect('/thankyou');
});

router.get('/login', (req, res) => {
    const data = {title: 'login'};
    res.render('pages/login', data);
});

router.get('/thankyou', (req, res) => {
    const data = {title: 'thankyou'};
    res.render('pages/thankyou',data);
});



module.exports = router;
