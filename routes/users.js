const express = require('express');
const router = express.Router();
const User = require('../models/user.models');

router.post('/create', async(req, res) => {   
  try{              
    const { email } = req.body; 
    const user = await User.findOne({email});    
      if(user){
        return res.status(400).send({ error: 'Email já cadastrado' });               
      }else{ 
        const user = await User.create(req.body);                         
        return res.send(user);          
      }            
    }catch(error){            
      return res.status(400).send({ error: 'Erro no registro' });    
    }
});

router.put('/updateUser', async(req, res) => {   
  try{    
    const user = await User.findOneAndUpdate(
      { email: req.body.email },       
      { $set: req.body},
      { new: true, useFindAndModify: false });             
    return res.send((user));
  }catch(error){    
    return res.status(400).send({ error: 'Error update user' });    
  }  
});

router.delete('/deleteUser', async(req, res) =>{ 
  const { email } = req.body;  
  try{
    const user = await User.findOneAndDelete({email});    
    return res.status(200).send('Usuario deletado com sucesso');    
  }catch(error){
    return res.status(400).send({ error: 'Error delete user' });
  }  
});

router.get('/client', async(req, res, next) =>{ // GET de teste  
  try{
    const listUser = await User.find()             
    return res.status(200).send(listUser)
  }catch(error){
    return res.status(400).send({ error: 'Error' }); 
  }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = app => app.use('/users', router);