const productCardGen = (obj) => {
	const divEl = document.createElement('div')
	const titleEl = document.createElement('h2')
	const idEl = document.createElement('p')

	divEl.classList.add("product");

	titleEl.textContent = obj.title

	idEl.textContent = obj.id

	divEl.append(titleEl, idEl);

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