const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


fetch(TRAINERS_URL)
.then(resp => resp.json())
.then( trainersObject => {renderAllTeams(trainersObject)})


function renderAllTeams(trainersObject) {
    trainersObject.forEach(trainer => {renderTrainer(trainer)
         });
}

function renderTrainer(trainer) {
    let main = document.getElementsByName('main')
    let div = document.createElement('div')
    div.className = 'card'
    div.dataset.number = trainer.id

    let button = document.createElement('button')
    button.dataset.number = trainer.id
    div.innerText = trainer.name
    console.log(main)
    // main.append(div)
}

function renderPokemon(pokemon) {
    let ul = document.createElement('ul')
    
    let li = document.createElement('li')

    let classButton = document.createElement('button')
    classButton.className = 'release'
    classButton

    li.insertAdjacentElement("afterbegin", classButton)

}