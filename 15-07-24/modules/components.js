const productCardGen = (obj, callback1, callback2) => {
	const divEl = document.createElement('div')
	const titleEl = document.createElement('h2')
	const idEl = document.createElement('p')
	const btnEl = document.createElement('button');
	const btnUpdateEl = document.createElement('button');


	divEl.classList.add("product");

	titleEl.textContent = obj.title

	idEl.textContent = obj.id

	btnEl.innerText = "Delete"
	btnUpdateEl.innerText = "Update"

	btnEl.addEventListener('click', callback1)

	btnUpdateEl.addEventListener('click', callback2);

	divEl.append(titleEl, idEl, btnEl, btnUpdateEl);


	return divEl;

}


const listProductGen = () => {
	const listEl = document.createElement('section');

	listEl.classList.add('list_product');

	return listEl;

}

export {
	productCardGen,
	listProductGen
}