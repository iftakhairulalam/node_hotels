const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.post('/', async (req, res) =>{
    try{
 
         const data = req.body
         const newPerson = new Person (data);
 
         const response = await newPerson.save();
 
         console.log('data saved');
 
         res.status(200).json(response);
    
     }catch(err){
         console.log(err);
         res.status(500).json({error: 'Internal Server Error'});
 
    }
 });


 
//Get method

router.get('/', async (req, res) =>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'})
    }
})


router.get('/:workType', async (req, res) =>{
    const workType = req.params.workType;
   try{
       const workType = req.params.workType;
       if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const response= await Person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response);
       }else{
        res.status(404).json({error: 'Invalid work type'})
       }
   }catch(err){
        res.status(500).json({error: 'Internal server error'})
   }
});

router.put('/:id', async (req, res) =>{
    try{
        const personID = req.params.id; //Extract the url parameter
        const updatedPersonData = req.body; // Update data for the person
        const response = await Person.findByIdAndUpdate(personID, updatedPersonData, {
            new: true,
            runValidators: true,
        });

        if(!response){
            return res.status(400).json({Error: 'Person not found'});
        }
        console.log('data updated')
        res.status(200).json(response);


    }catch(err){
        console.log('error')
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.delete('/:id', async (req, res) =>{
    try{
        const personID = req.params.id;
        const response = await Person.findByIdAndRemove(personID);

        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('Data deleted successfully');
        res.status(200).json({message: 'Person deleted successfully'});

    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'}); 
    }
})


module.exports = router;