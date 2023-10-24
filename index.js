//import
const express = require('express')
const app = express();
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')

mongoose.connect('mongodb+srv://test:1234@phone.layngvr.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})

global.loggedIn = null

app.use(express.static('public')) //access to public folder
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.use(expressSession({
    secret: "node secret"
}))

app.use("*",(req,res,next) => {
    loggedIn =req.session.userId
    next()
})

app.set('view engine', 'ejs')

//Controller
const indexController = require('./controller/indexController')
const loginController = require('./controller/loginController')
const registerController = require('./controller/registerController')
const storeUserController = require('./controller/storeUsercontroller')
const loginUserController = require('./controller/loginUserController')
const addController = require('./controller/addController')
const addphoneController = require('./controller/addphoneController');
const searchPhoneController = require('./controller/searchPhoneController');
const deleteUserByeController = require('./controller/deleteUserByeController');
const updateUserController = require('./controller/updateUserController');
const logoutController = require('./controller/logoutController');
const accountController = require('./controller/accountController');
const editphoneController = require('./controller/editphoneController');
const deletephone = require('./controller/deletephone')

//Call page to use
app.get('/',indexController)
app.get('/login',loginController)
app.get('/register',registerController)
app.post('/user/register', storeUserController)
app.post('/user/login', loginUserController)
app.get('/addphone',addController)
app.post('/phone/addphone',addphoneController)
app.post('/phone/search',searchPhoneController)
app.post('/user/update',updateUserController)
app.get('/logout',logoutController)
app.get('/account',accountController)
app.post('/user/delete',deleteUserByeController)
app.post('/phone/edit',editphoneController)
app.post('/phone/delete',deletephone)



//Set Port
app.listen(4000, () =>{
    console.log("App listen on port 4000")
})