const productCardGen = () => {
	const divEl = document.createElement('div')
	const titleEl = document.createElement('h2')
	const idEl = document.createElement('p')

	divEl.classList.add("product");

	titleEl.textContent = "Nome prodotto"

	idEl.textContent = "id prodotto"

	divEl.append(titleEl, idEl);

	return divEl;
}

export {
	productCardGen
}