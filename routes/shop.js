const express = require('express'); // ---- same what we did in admin.js file

const router = express.Router(); // ---- same what we did in admin.js file

router.get('/', (req, res, next) => {
    res.send('<h1>Hello from Express!!')
});

module.exports = router; // ---- same what we did in admin.js file