const { Router } = require("express");
const { createProduct, getProductCategories, deleteProducte, getAllProducts } = require("../controllers/product.controller");

const productRouter = Router() ; 

productRouter.post('/createProduct' , createProduct )
// productRouter.get('/getProductCategories' , getProductCategories )
productRouter.delete('/deleteProducte' , deleteProducte )
productRouter.get('/getAllProducts',getAllProducts)

module.exports = productRouter
