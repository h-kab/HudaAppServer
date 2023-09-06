const express = require("express");
const mongoose = require("mongoose");
const userModule = require("./Api/modules/user.module");
const Routs = require("./Api/routs/Routs");
const app = express();
app.use('/', Routs);

app.use(express.json());

app.get("/app", (req, res) => {
    res.status(200).json({
        message: "no",
        batata: "5kg",
    })

})
// UserModule in DB 



// app.post("/creatNewUser", (req, res) => {
//     userModule.create({
//         email: req.body.email,
//         password: req.body.password,
        

//     }).then((response) => {
//         res.status(200).json({
//             message: "user added",
//         });
//     });
// });

// app.post("/creatNewStudent",  CONTROLER => (req, res) => {
//     StudentModule.create({
//         name: req.body.name,
//         id: req.body.id,

//     }).then((response) => {
//         res.status(200).json({
//             message: "student added",
//         });
//     });
// });

app.post('/getallUsers', (req, res) => {
    userModule.find()
        .then((stRes) => {
            console.log("");
            res.status(200).json({
                message: "done",
                users: stRes,
            });
        })
        .catch((e) => {
            console.log("get all users error:", e);
            res.status(500).json({ error: true, errorMessage: e })
        });
})


const mongooseLink = 'mongodb+srv://hudakabha093:hudasqlkabha4@cluster0.bwsjuef.mongodb.net/'
//hudakabha093                
mongoose.connect(mongooseLink);
mongoose.connection.on("connected", () => {
    console.log("mongo connected");
})


module.exports = app;