const express = require("express");
const mongoose = require("mongoose");
const StudentModule = require('./modules/student.module');
const Route = require("./routs/Route");
app.use('/', Route);


const app = express();
app.use(express.json());

app.get("/app", (req, res) => {
    res.status(200).json({
        message: "no",
        batata: "5kg",
    })

})
// StudentMudle in DB



app.post("/creatNewStudent", (req, res) => {
    StudentModule.create({
        name: req.body.name,
        id: req.body.id,

    }).then((response) => {
        res.status(200).json({
            message: "student added",
        });
    });
});

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


app.post('/getallStudents', (req, res) => {
    StudentModule.find()
        .then((stRes) => {
            console.log("");
            res.status(200).json({
                message: "done",
                users: stRes,
            });
        })
        .catch((e) => {
            console.log("get all students error: ", e);
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