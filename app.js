const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');  // ---- importing the "admin.js" named route file here(or more precisely, we are importing the "router" named object from there) from the routes folder.
const shopRoutes = require('./routes/shop');// ---- importing the route "shop.js" NOTE: the order of imports doesn't matter.

app.use(bodyParser.urlencoded());

app.use(adminRoutes); // ----- just using that imported file here......and also the order matters here ie; kb kiske pahle and baad me likhna hai ye matter krta hai.
app.use(shopRoutes); // ----- order here matters and we are registring it in second position.




app.listen(5000);