const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) =>{
    const {email,password,username} = req.body
    console.log(email)
    console.log(username)
    User.findOne({email:email}).then((user)=>{
        let cmp = bcrypt.compare(password,user.password).then((match)=>{
            if(match){
                User.deleteOne({email:email}).then((User)=>{
                    console.log("delete sucess")
                    req.session.destroy(() => {
                        res.redirect('/')
                    })
                })
            }else{
                res.redirect('/')
            }
        })
    })
}