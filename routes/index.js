const product = require("./product/productRoutes");
//const urlPrefix = "/api/v1"
module.exports = (app) => {
  // Declare Routes
  app.use("/products", product)
   
};
