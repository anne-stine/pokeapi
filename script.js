// The name of a pokemon
// It’s id
// An img
// A description

const randomPokemon = new Request("https://pokeapi.co/api/v2/pokemon/random")

/* Render random pokemon card */
const renderPokeCard = async () =>
{
    // let response = await fetch("https://pokeapi.co/api/v2/pokemon/random")
    // console.log(response.data)
    
    fetch(randomPokemon)

    // fetch("https://pokeapi.co/api/v2/pokemon/random")
        .then(response => response.json())
        .then(data => console.log(data))
}

renderPokeCard()