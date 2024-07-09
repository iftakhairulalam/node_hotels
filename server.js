const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body





app.get('/', function (req, res) {
    res.send('Welcome to iftakhars hotel.! How can I help you sir? We have list of menues')
});





const personRoutes = require('./routes/personRoutes');
const menueRoutes = require('./routes/menueRoutes');

app.use('/person', personRoutes);
app.use('/menues', menueRoutes);

app.listen(3000, () => {
    console.log('listening on port: 3000');
});

