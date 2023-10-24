const Phone = require('../models/phone')

module.exports = (req,res) =>{
    Phone.create(req.body).then(()=>{
        console.log("Add Phone success")
        res.redirect('/')
    }).catch((error)=>{
        if(error){
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors',validationErrors)
            req.flash('data',req.body)
            console.log(error)
            return res.redirect('/')
        }
    })
}