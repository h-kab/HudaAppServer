var { Router } = require("express");
const { Login, signUp } = require("../controllers/user.controller");
const userRouter = new Router()

userRouter.post('/Login' , Login )
userRouter.post('/Register' , signUp )
module.exports = userRouter