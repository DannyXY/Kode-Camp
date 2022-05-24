const {User} = require('../models/user')

const postUser = (req, res)=> {
    const {name, course, year} = req.body
    const addUser = new User({
      name,
      course,
      year
    })
    addUser.save(function(err, newUser){
      if(err){
        console.log(err);
      }
      res.json({
        success:true,
        data: newUser
      })
    })
  }
const getUser = (req, res, next) => {
    User.find({}, function(err, records){
        if(err){
            console.log(err);
          }
          res.json({
              success:true,
              records:records
    })
    })
  }

module.exports = {getUser,postUser}