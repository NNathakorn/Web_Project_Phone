const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const PhoneSchema = new Schema({  
    phonename:{
        type: String,
        required: [true, 'Please provide email']
    },
    screensize:{
        type: String,
        required: [true, 'Please provide password']
    },
    os:{
        type: String,
        required: [true, 'Please provide username']
    },
    cpu:{
        type: String,
        required: [true, 'Please provide username']
    },
    memory:{
        type: String,
        required: [true, 'Please provide username']
    },
    battery:{
        type: String,
        required: [true, 'Please provide username']
    },
    camera:{
        type: String,
        required: [true, 'Please provide username']
    },
    imagephone:{
        type: String,
        required: [true, 'Please provide username']
    }
})

const Phone = mongoose.model('Phone', PhoneSchema)
module.exports = Phone