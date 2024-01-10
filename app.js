const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded());

app.use('/admin', adminRoutes); // --- this is the filtering mechanism here in app.js and it allows us to put a common starting segment for our path which all routes in a given file use to outsource that into this app.js file
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});


app.listen(5000);