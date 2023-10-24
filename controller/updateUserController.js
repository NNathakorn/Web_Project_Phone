const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) =>{
    const {email,password,username} = req.body
    console.log(email)
    console.log(username)
    User.findOne({email:email}).then((user)=>{
        let cmp = bcrypt.compare(password,user.password).then((match)=>{
            if(match){
                User.updateOne({email:email},
                    {$set:{username:username}}).then((user)=>{
                        console.log("update sucess")
                        return res.redirect('/')
                    })
            }else{
                res.redirect('/update')
            }
        })
    })
}