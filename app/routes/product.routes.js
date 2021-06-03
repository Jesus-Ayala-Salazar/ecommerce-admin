module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  

    router.post("/", products.create);
  
 
    router.get("/", products.findAll);
  
 
    router.get("/inStock", products.findAllInStock);
    

    router.get("/description", products.findAllDescription);
  

    router.get("/:productId", products.findOne);
  

    router.put("/:productId", products.update);
  

    router.delete("/:productId", products.delete);
  

    router.delete("/", products.deleteAll);
  
    app.use('/api/products', router);
  };
  