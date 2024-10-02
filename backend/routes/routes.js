const { response } = require('express')
const express= require('express')
const router= express.Router()
const signUpTemplateCopy=require('../models/signUpModel')

router.post('/signup',(request,response)=>{
    const signedUpUser=new signUpTemplateCopy({
       firstName:request.body.firstName, 
       lastName:request.body.lastName, 
       email:request.body.email, 
       phone:request.body.phone, 
       password:request.body.password, 
       cpassword:request.body.cpasword
    })
    signedUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

module.exports=router