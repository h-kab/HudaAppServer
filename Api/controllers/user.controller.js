const { default: mongoose } = require("mongoose");
const mongodb = require("mongodb");
const userModule = require("../modules/user.module");


const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const mail = email?.toLowerCase()
        if (!(email && password)) {
            res.status(404).json({ message: "incorrect inputs" })
            return;
        }

        const usre = await userModule.findOne({ email: mail, password });
        console.log(usre);


        if (usre) {
            res.status(200).json({ message: "welcome :)" });
        } else {
            res.status(404).json({ message: "incorrect" });
        }

    } catch (e) {
        console.log(e);
    }
}//login





const SignUp = async (req, res) => {
    console.log(req);
    const { email, password } = req.body || {};
    const mail = email?.toLowerCase()

    try {
        // Get user input

        // Validate user input
        if (!(email && password)) {
            res.status(408).json({ message: "All input are required" });
            return
        }
        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await userModule.findOne({ email: mail });

        if (oldUser) {
            return res
                .status(207)
                .json({ message: "User Already Exist. Please Try Again" });
        }
        //Encrypt user password
        // Create user in our database
        const user = await userModule.create({
            email: email, // sanitize: convert email to lowercase
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
    SignUp,
}



