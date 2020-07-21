const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


fetch(TRAINERS_URL)
.then(resp => resp.json())
.then( trainersObject => {renderAllTeams(trainersObject)})

function addPokemon(){
    
}

function renderAllTeams(trainersObject) {
    trainersObject.forEach(trainer => {renderTrainer(trainer)
    });
}

function renderTrainer(trainer) {
    let main = document.querySelector('main')
    let div = document.createElement('div')
    div.className = 'card'
    div.dataset.id = trainer.id
    
    let button = document.createElement('button')
    button.dataset.trainerId = trainer.id
    button.textContent = "Add Pokemon"
    
    let p = document.createElement('p')
    p.textContent = trainer.name
    p.append(button)
    div.append(p)
    main.append(div)
    
    let ul = document.createElement('ul')
    trainer.pokemons.forEach(pokemon => renderPokemon(pokemon, ul))
    div.append(ul)

    button.addEventListener('click',function(event){
        let trainer_id = trainer.id
        let pokemonObj = {trainer_id}

    if (ul.getElementsByTagName('li').length < 6) {

        fetch(POKEMONS_URL,{
            method:'POST',
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
              },
            body:JSON.stringify(pokemonObj)

        })
        .then(resp => resp.json())
        .then(pokemon=>renderPokemon(pokemon, ul))
    }
})



function renderPokemon(pokemon, ul) {
    let li = document.createElement('li')
    let button = document.createElement('button')
    button.classList += "release"
    button.dataset.pokemonId = pokemon.id
    button.textContent = "Release"

    li.textContent = pokemon.nickname + `(${pokemon.species})`
    li.append(button)
    ul.append(li)

    button.addEventListener('click', function(e){
        
        
        fetch(POKEMONS_URL +`/${pokemon.id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(button.parentElement.remove())
        }   
    )
}}