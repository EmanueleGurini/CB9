import { productCardGen, listProductGen } from "./modules/components.js";
import { GET, POST, DELETE, PUT } from './modules/http.js'

const main = document.getElementById('main');
const updateForm = document.getElementById('update-form');

const getProducts = () => {
	return GET();
}

const addProduct = async (value) => {
	const data = value;
	return POST(data);
}


/**
 *	restituisce una lista di prodotti che vengono dal ecommerce 
 * @returns qualcosa
 */
const renderListProduct = async () => {

	const products = await getProducts()

	const listProduct = listProductGen();

	products.forEach(product => {

		const productCard = productCardGen(product, async () => {
			await DELETE(product.id)

			main.innerHTML = "";

			main.append(await renderListProduct());
		}, () => {
			updateForm[0].value = product.title
			updateForm[1].value = product.id
		});
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




updateForm.addEventListener('submit', async (e) => {
	e.preventDefault();

	const id = e.target[1].value;

	const data = {
		"title": e.target[0].value,
		"price": 10,
	}

	await PUT(id, data)

	e.target[0].value = ""
	e.target[1].value = ""

	main.innerHTML = "";

	main.append(await renderListProduct());
})

window.onload = main.append(await renderListProduct())