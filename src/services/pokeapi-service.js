const BASE_URL="https://pokeapi.co/api/v2/pokemon";

export function getPokemon(query){
    return fetch(`${BASE_URL}/${query}`)
    .then(res => res.json())
}