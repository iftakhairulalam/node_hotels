const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/person');
const menueItem = require('./models/Menue')

// Use built-in express body parser middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Iftakhars restaurant, What do you want sir?');
});

app.post('/person', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();

        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
});

app.get('/person:workType', async (req, res) =>{
    const workType = req.params.workType;
    try{
        if( workType == 'chef' || workType == 'waiter' || workType == 'manager'){
            const response = await person.find({work: workType}) ;
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error : 'Invalid work type' });
        }
    
    }
    catch (err) {
        console.log(err);
        response.status(500).json({error: 'internal server error'});

    }
})

app.listen(3000, () => {
    console.log('listening on port: 3000');
});
