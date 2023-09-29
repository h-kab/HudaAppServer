const { default: mongoose } = require("mongoose");
const mongodb = require("mongodb");
const userModule = require("../modules/user.module");


const Login = (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(500).send("incorrect inputs")
        }

        res.status(200).json({ message: " welcom :)" });
    } catch (e) {
        console.log(e);
    }
}//login


const signUp = async (req, res) => {
    console.log(req);
    const { email, password } = req.body || {};

    try {
        // Get user input

        // Validate user input
        if (!(email && password)) {
            res.status(408).json({ message: "All input is required" });
            return
        }
        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await userModule.findOne({ email });

        if (oldUser) {
            return res
                .status(207)
                .json({ message: "User Already Exist. Please Login" });
        }
        //Encrypt user password
        // Create user in our database
        const user = await userModule.create({
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: password,
        });
        // return new user
        res.status(200).json({ user: user });
    } catch (err) {
        console.log(err);

    }
}


module.exports = {
    Login,
    signUp,
}



