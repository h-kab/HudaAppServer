const express = require("express");
const mongoose = require("mongoose");
const userModule = require("./Api/modules/user.module");
const Routs = require("./Api/routs/Routs");
const { productData } = require("./data");
const { createProduct, deleteProducte } = require("./Api/controllers/product.controller");
const productModule = require("./Api/modules/produt.module");
const app = express();

app.use(express.json());

app.use('/', Routs);
//  app.use(cors());

app.get("/app", (req, res) => {


    res.status(200).json({
        message: "no",
        batata:"message"
    })

})



//works ig?

// app.post("/dataPost", (req,res)=>{
//     const {name, price,img,images,dis,Category}=req.body
//     productModule.create({
//         name, 
//         price,
//         img,
//         images,
//         dis,
//         Category,
//     })
//     .then((creatRes) => {
//         res.status(200).json({
//             prodact: creatRes._doc
//         });

//     })
//     .catch((e) => {
//         res.status(500).json({
//             error: true,
//             errorMessage: e.message,
//         })
//     })
    

// })



app.post("/updateProduc", async (req, res) => {
    const {name, price, img, images, dis, Category } = req.body;

    if (!name) {
        return res.status(400).json({
            error: true,
            errorMessage: "name is require",
        });
    }
    

    try {
        const updateProduct = await productModule.updateOne(
            {name}, 
            {price}, 
            { new: true } 
        );

        if (updateProduct) {
            res.status(200).json({
                message: "product updated successfully",
                product: updateProduct,
            });
        } else {
            res.status(404).json({
                error: true,
                errorMessage: "product not found",
            });
        }
    } catch (e) {
        console.log("Error updating product:", e);
        res.status(500).json({
            error: true,
            errorMessage: e.message,
        });
    }
});



//worksss
app.post("/UpdateUser", async (req, res) => {
    const {email,password} = req.body;

    if (!email || !password) {
        return res.status(400).json({
            error: true,
            errorMessage: "Email and password are required",
        });
    }

    try {
        const updatedUser = await userModule.updateOne(
            { email}, 
            { password}, 
            { new: true } 
        );

        if (updatedUser) {
            res.status(200).json({
                message: "User updated successfully",
                user: updatedUser,
            });
        } else {
            res.status(404).json({
                error: true,
                errorMessage: "User not found",
            });
        }
    } catch (e) {
        console.log("Error updating user:", e);
        res.status(500).json({
            error: true,
            errorMessage: e.message,
        });
    }
});











// Your POST route
app.post("/dataPost", (req, res) => {
    const { name, price, img, images, dis, Category } = req.body;

    // Basic validation
    if (!name || !price || !img || !images || !dis || !Category) {
        return res.status(400).json({
            error: true,
            errorMessage: "All fields are required",
        });
    }

    productModule.create({
        name,
        price,
        img,
        images,
        dis,
        Category,
    })
    .then((creatRes) => {
        res.status(200).json({
            prodact: creatRes._doc
        });
    })
    .catch((e) => {
        res.status(500).json({
            error: true,
            errorMessage: e.message,
        });
    });
});


















app.post("/creatNewUser", (req, res) => {
    const { email, password } = req.body;
    userModule.create({
        email,
        password,


    })
        .then((creatRes) => {
            res.status(200).json({
                user: creatRes._doc
            });

        })
        .catch((e) => {
            res.status(500).json({
                error: true,
                errorMessage: e.message,
            })
        })
});


// works
//GET method 
app.get("/GetAllUsers", (req, res) => {
    userModule.find()
        .then((users) => {
            res.status(200).json({ users });

        })
        .catch((e) =>
            res.status(500)
                .json({ error: true, errorMessagee: e.message })
        );
});



//works
//DELET method

app.delete("/DeleteOneUserByEmail/:email", (req, res) => {
    const userEmail = req.body.email;
    console.log("Delete request received for user email:", userEmail); 
    
    userModule.findOneAndDelete({ email: userEmail })
        .then((deletedUser) => {
            if (deletedUser) {
                console.log("User deleted:", deletedUser);
                res.status(200).json({ message: "User deleted successfully", user: deletedUser });
            } else {
                res.status(404).json({ error: true, errorMessage: "User not found" });
            }
        })
        .catch((e) => {
            console.error("Error deleting user:", e);
            res.status(500).json({ error: true, errorMessage: e.message });
        });
});



// app.delete("/deleteOneProductByName", (req, res) => {
//     const { name } = req.body; // Destructure name from req.body
//     console.log("Delete request received for product", name);

//     if (!name) {
//         return res.status(400).json({
//             error: true,
//             errorMessage: "Product name is required",
//         });
//     }

//     productModule.findOneAndDelete({ name: name })
//         .then((deletedProduct) => {
//             if (deletedProduct) {
//                 console.log("Product deleted:", deletedProduct);
//                 res.status(200).json({
//                     message: "Product deleted successfully",
//                     product: deletedProduct
//                 });
//             } else {
//                 res.status(404).json({
//                     error: true,
//                     errorMessage: "Product not found"
//                 });
//             }
//         })
//         .catch((e) => {
//             console.log("Error deleting product:", e);
//             res.status(500).json({
//                 error: true,
//                 errorMessage: e.message
//             });
//         });
// });



// app.post("/UpdateUser", async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({
//             error: true,
//             errorMessage: "User ID, email, and password are required",
//         });
//     }

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const updatedUser = await userModule.findByIdAndUpdate(
        
//             { email, password: hashedPassword },
//             { new: true } 
//         );

//         if (updatedUser) {
//             res.status(200).json({
//                 message: "User updated successfully",
//                 user: updatedUser,
//             });
//         } else {
//             res.status(404).json({
//                 error: true,
//                 errorMessage: "User not found",
//             });
//         }
//     } catch (e) {
//         console.log("Error updating user:", e);
//         res.status(500).json({
//             error: true,
//             errorMessage: e.message,
//         });
//     }
// });









// UserModule in DB???



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

// dont work ////
// app.get('/getallUsers', (req, res) => {
//     userModule.find()
//         .then((User) => {
//             console.log("{User.length}");
//             res.status(200).json({
//                 message: "we got all users!",
//                 users: User,
//             });
//         })
//         .catch((e) => {
//             console.log("get all users error:", e);
//             res.status(500).json({
//                 error: true,
//                 errorMessage: e
//             })
//         });
// });





// productData.forEach((item)=>{
//     createProduct({
//         body:{
//         id:item.id,
//         name:item.name,
//         img:item.img,
//         price:item.price,
//     }})
// })


const mongooseLink = 'mongodb+srv://hudakabha093:hudasqlkabha4@cluster0.bwsjuef.mongodb.net/'
//hudakabha093                
mongoose.connect(mongooseLink);
mongoose.connection.on("connected", () => {
    console.log("mongo connected");
})


module.exports = app;