import { productCardGen, listProductGen } from "./modules/components.js";
import { GET, POST } from "./modules/HTTP.js"

const main = document.getElementById('main');

const getProducts = () => {
	return GET();
}

const addProduct = async (value) => {
	const data = value;
	return POST(data);
}

const renderListProduct = async () => {

	const products = await getProducts()
	console.log(products)

	const listProduct = listProductGen();

	products.forEach(product => {

		const productCard = productCardGen(product);
		listProduct.append(productCard);
	})

	return listProduct;

}

const productForm = document.getElementById('product-form');

productForm.addEventListener('submit', async (e) => {
	e.preventDefault();

	const data = {
		"title": e.target[0].value,
		"price": 10,
		"description": "A description",
		"categoryId": 1,
		"images": ["https://placeimg.com/640/480/any"]
	}

	await addProduct(data)

	main.innerHTML = "";

	main.append(await renderListProduct());
})

window.onload = main.append(await renderListProduct())