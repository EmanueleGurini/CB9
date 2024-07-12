import { pokemon } from "./data/pokemon.js";

const cardElGen = (obj) => {
	// Creiamo la prima card
	const container = document.createElement('div');
	const imageEl = document.createElement('img');
	const titleEl = document.createElement('h2');
	const idEl = document.createElement('span');
	const typeEl = document.createElement('p');


	container.classList.add('card', obj.type)

	imageEl.src = obj.image;
	imageEl.className = "card__img"

	titleEl.textContent = obj.name;
	titleEl.className = "card__title"


	idEl.textContent = `# ${obj.id}`;
	idEl.className = "card__id"

	typeEl.textContent = obj.type;
	typeEl.className = "card__type"

	container.append(imageEl, titleEl, idEl, typeEl);
	return container;
}

const main = document.getElementById('main');

pokemon.forEach((singlePokemon) => {
	const cardEl = cardElGen(singlePokemon);
	main.append(cardEl);
})


