import { productCardGen, listProductGen } from "./modules/components.js";
import { products } from "./data/products.js";

const main = document.getElementById('main');

const renderListProduct = () => {

	const listProduct = listProductGen();

	products.forEach(product => {

		const productCard = productCardGen(product);
		listProduct.append(productCard);
	})

	return listProduct;

}

const addButton = document.getElementById("addButton");

addButton.addEventListener('click', () => {

	main.innerHTML = "";
	products.push(products[0])

	main.append(renderListProduct());
})

window.onload = main.append(renderListProduct())