fetch(`https://pokeapi.co/api/v2/pokemon/1`)
.then(response => response.json())
.then(bring => document.querySelector(".pokeImage").style.backgroundImage = 'url(' + bring.sprites.other.dream_world.front_default + ')')
.then(bring => document.querySelector(".pokeImage").innerHTML = bring.results[0].name)

let image = document.querySelector(`.pokeImage`)

image.addEventListener('click', function(){
image.classList.toggle(`open`)
})

const modalContainer = document.querySelector(".modal-containter");
const modalTriggers = document.querySelectorAll(".modal-trigger"); 

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

function toggleModal(){
modalContainer.classList.toggle("active");
}


  