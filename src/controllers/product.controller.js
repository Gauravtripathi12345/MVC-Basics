// Please don't change the pre-written code
// Import the necessary modules here
import ProductModel from '../models/product.model.js';
// import ProductModel from '../models/product.model.js';

export default class ProductController {
  getProducts = (req, res) => {
    // Write your code here
    const productModel = new ProductModel();
    const products = productModel.fetchProducts();
    // console.log("HEHE",products);
    res.render("product", {products});
  };
}
