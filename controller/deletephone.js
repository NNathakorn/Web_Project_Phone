const bcrypt = require('bcrypt')
const User = require('../models/phone')

module.exports = (req, res) =>{
    const {phonename} = req.body
    User.deleteOne({phonename:phonename}).then((User)=>{
        console.log("delete sucess")
        res.redirect('/')
    })
}