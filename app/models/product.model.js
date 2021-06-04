module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      name: {
        type: Sequelize.STRING
      },
      productImage: {
        type: Sequelize.BLOB
      },
      inStock: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Product;
  };