import { productCardGen } from "./modules/components.js";
import { products } from "./data/products.js";

console.log(products)


const listProduct = document.getElementById('list_product');


const renderListProduct = () => {

	const productCard = productCardGen();

	return productCard;


}

window.onload = listProduct.append(renderListProduct())