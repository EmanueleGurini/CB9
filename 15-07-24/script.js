import { productCardGen, listProductGen } from "./modules/components.js";
import { GET, POST, DELETE, PUT } from './modules/http.js';

const main = document.getElementById('main');
const addProductForm = document.getElementById('add-product-form');
const updateProductForm = document.getElementById('update-product-form');


const deleteProduct = async (productId) => {
	try {
		await DELETE(productId);
		main.innerHTML = "";
		main.append(await renderListProduct());
	} catch (error) {
		console.Error('Error:', error)
	}
};

const updateProduct = (product) => {
	updateProductForm[0].value = product.title;
	updateProductForm[1].value = product.id;
};

const renderListProduct = async () => {
	try {
		const products = await GET();
		const listProduct = listProductGen();

		products.forEach((product) => {
			const productCard = productCardGen(product, () => deleteProduct(product.id), () => updateProduct(product));
			listProduct.append(productCard);
		});

		return listProduct;
	} catch (error) {
		console.error("Errore nel caricamento dei prodotti:", error);
	}
};

const addProduct = async (e) => {
	e.preventDefault();

	const data = {
		"title": e.target[0].value,
		"price": 10,
		"description": "A description",
		"categoryId": 1,
		"images": ["https://placeimg.com/640/480/any"]
	};

	try {
		await POST(data);
		main.innerHTML = "";
		main.append(await renderListProduct());
	} catch (error) {
		console.error('Error:', error)
	}
};

const updateProductFormSubmit = async (e) => {
	try {
		e.preventDefault();
		const id = e.target[1].value;
		const data = {
			"title": e.target[0].value,
			"price": 10
		};
		await PUT(id, data);
		e.target[0].value = "";
		e.target[1].value = "";
		main.innerHTML = "";
		main.append(await renderListProduct());
	} catch (error) {
		console.error('Error:', error)
	}
};

addProductForm.addEventListener('submit', addProduct);
updateProductForm.addEventListener('submit', updateProductFormSubmit);

window.onload = async () => {
	main.append(await renderListProduct());
};
