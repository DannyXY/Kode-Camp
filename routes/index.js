var express = require('express');
var router = express.Router();
const controllers = require('../controllers/indexController');
const { User } = require('../models/user');

const {
  getUser,
  postUser} = controllers
/* GET home page. */
router.get('/', getUser);
router.post('/', postUser)

module.exports = router;
