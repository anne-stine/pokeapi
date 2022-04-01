// The name of a pokemon
// It’s id
// An img
// A description

/* Pokemon API */
const apiData = 
{
    apiUrl: "https://pokeapi.co/api/v2/",
    endpointPokemon: "pokemon/",
    endpointCharacteristic: "characteristic/",
}

/* Render pokemon card with a random pokemon */
const renderPokeCard = async () => 
{
    const random = Math.floor(Math.random() * 1127) + 1
    let url = apiData.apiUrl + apiData.endpointPokemon + random
    await fetch(url)
        .then(response => response.json())
        .then(pokemon => 
        {
            document.querySelector(".pokemon-img").src = pokemon.sprites.other.dream_world.front_default
            document.querySelector(".pokemon-name").textContent = pokemon.name
            document.querySelector(".pokemon-id").textContent = "ID: " + pokemon.id
        })
        .catch(() => {console.error("Something went wrong!")})
}

document.querySelector("button").addEventListener("click", renderPokeCard)