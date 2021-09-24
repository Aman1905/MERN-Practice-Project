const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello World from Server Router");
});

router.get('/about', (req, res) => {
    res.send("Hello About World from Server");
});

router.get('/contact', (req, res) => {
    res.send("Hello Contact World from Server");
});

router.get('/signup', (req, res) => {
    res.send("Hello REgisteration World from Server");
});

router.get('/signin', (req, res) => {
    res.send("Hello Login World from Server");
});

router.post('/register', (req, res) => {
    console.log((req.body));
    res.json({message:req.body});
    // res.send("This is My Register Page")
})

module.exports = router;