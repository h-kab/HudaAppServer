const productModule = require("../modules/produt.module");

const createProduct = (req, res) => {
  // console.log(req.body);
  const { name, id, price, img } = req.body || {};
  //other way to write the up code:
  // const name = req.body.name
  // categories = req.body.categories
  // wight = req.body.wight
  try {
    productModule
      .create({
        name,
        // name: name
        id,
        price,
        img,
      })
      .then((p) => {
        res?.status(200).json({ message: "Done", product: p });
      }).catch((e) => {
        res?.status(200).json({ message: "e", });
      })
  }
  catch (e) {
    res?.status(404).json({ message: "e", });
  }

};
const getProduct = (req, res) => {





};

const deleteProducte = (req, res) => {
  productModule.deleteOne({ name: req.body.name })
    .then(delRes => {
      res.status(200).json(delRes)
    })
}

const getAllProducts =(req , res)=>{
  productModule.find({}).then((data)=>{
    if (data) {
      res.status(200).json({products:data})
    }else{
      res.status(400).json({message:"there has been an error"})
    }
  }).catch((e)=>{
    res.status(500).json({message:" servinternaler error" , errorCode:401})
    console.log("error getting all products ", e);
  })
}

module.exports = {
  createProduct,
  deleteProducte,
getAllProducts,
};




// const getProductCategories = async (req, res) => {
//   const allProducts = await productModule.find();

//   var categories = [];
//   allProducts.forEach((product) => {
//     categories.push(...product.categories);
//   });

//   const categirySet = new Set(categories);
//   categories = Array.from(categirySet);

//   res.status(200).json(categories);
// };