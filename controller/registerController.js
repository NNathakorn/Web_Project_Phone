module.exports = (req,res) =>{

    let email = ""
    let password = ""
    let username = ""
    let data = req.flash('data')[0]

    if(typeof data != "undefined"){
        email = data.email//เก็บที่กรอกทิ้งไว้
        password = data.password//เก็บที่กรอกทิ้งไว้
        username = data.username
    }

    res.render('register', {
        errors: req.flash('validationErrors'),
        email : email, //เอาที่เก็บมาใส่
        password : password,  //เอาที่เก็บมาใส่
        username : username
    })
}