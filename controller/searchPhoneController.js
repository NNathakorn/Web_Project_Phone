const bcrypt = require('bcrypt')
const Phone = require('../models/phone')
const User = require('../models/User')

module.exports = async (req, res) =>{
    let UserData = await User.findById(req.session.userId)
    const {search} = req.body
    if(loggedIn){
    console.log(UserData.email)
    if(UserData.email == "admin@aphone.com"){
        Phone.findOne({phonename : search}).then((PhoneData)=>{
            if(PhoneData){
                req.session.phoneId = PhoneData._id
                console.log(PhoneData)
                res.render('editphone', {PhoneData})
                }
            })
        }
    }
    else{
        Phone.findOne({phonename : search}).then((PhoneData)=>{
            if(PhoneData){
                console.log("hi")
                req.session.phoneId = PhoneData._id
                console.log(PhoneData)
                res.render('phone', {PhoneData})
                }
            })
        }
    }