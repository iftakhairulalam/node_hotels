const express = require('express');
const router = express.Router();
const Menues = require('../models/menues');

router.post('/', async (req, res)=> {
    try{
        const data = req.body;
        const newMenues = new Menues(data);
        const response = await newMenues.save()

        console.log('data saved');
        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    }
});

router.get('/', async (req, res)=> {
    try{
        const data = await Menues.find();
        console.log('data fetched');
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});


router.get('/:taste', async (req, res) =>{
        const tasteCatagory = req.params.taste;
    try{
        
        if(tasteCatagory == 'spicy' || tasteCatagory == 'sour' || tasteCatagory == 'sweet'){
                
        const response = await Menues.find({taste: tasteCatagory});
        console.log('data fetched');
        res.status(200).json(response);
        }else{
            res.status(404).json({error: 'We dont have that kind of dishes available sir'})
        }
    }catch(err){
        res.status(500).json({error: 'Internal Server Error'})
    }

})
module.exports= router;

//comment added
