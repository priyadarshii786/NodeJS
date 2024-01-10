const express = require('express'); // ----- importing express first of all by requiring express.

const router = express.Router(); // ----- now creating "router" named object by calling express.Router() as a function.

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit"');
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router; // ----- exporting router here from this file(or more precisely we are exporting the "router" named object from this file) to the app.js file