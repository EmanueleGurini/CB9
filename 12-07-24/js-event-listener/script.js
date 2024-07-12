
const pippo = document.getElementById("pippo");

function addTextRed() {
	this.classList.toggle('text-red')
}

//pippo.addEventListener("click", addTextRed)


// selezionare l'elemento

const shape = document.getElementById("shape")

// aggiungere un event listener

/* shape.addEventListener('click', function () {
	this.classList.toggle('circle')
})
 */

//shape.addEventListener('click', addTextRed)

const main = document.getElementById('main');
const square = document.createElement('div');

// Ogni oggetto espone: 
// 1 - metodi ==> funzioni ==> square.getElementById()
// 2 - proprietà ==> square.className = 'valore' 

square.className = "square";
square.classList.add('bg-coral')

main.append(square);









