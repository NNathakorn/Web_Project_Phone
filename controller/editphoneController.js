const bcrypt = require('bcrypt')
const Phone = require('../models/phone')

module.exports = (req, res) =>{
    const {phonename,screensize,os,cpu,memory,batterry,imagephone} = req.body
    console.log(phonename[0])
    Phone.updateMany({phonename:phonename[0]},
        {$set:{
            screensize:screensize,os:os,
            cpu:cpu,memory:memory,batterry:batterry,imagephone:imagephone
        }}).then((phone)=>{
            console.log(phone.imagephone)
        })
        res.redirect('/')
}