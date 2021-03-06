const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name: String,
    course: String,
    year: String,
})

const User = mongoose.model('users', userSchema)

module.exports = {User}
