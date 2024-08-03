var { Router } = require("express");
const { Login, SignUp } = require("../controllers/user.controller");
const { productData } = require("../../data");
const userRouter = new Router()

userRouter.post('/Login' , Login )
userRouter.post('/Register' , SignUp )
module.exports = userRouter