import React, { useState } from "react";
import { getPokemon} from "../services/pokeapi-service"
import PokemonData from "../components/PokemonData";
import img from "../assets/busqueda.png"


const SearchPage = ({ favorites, onRemoveFavorite, onAddFavorite }) => {
  const [query, setQuery] = useState("");
  const [state, setState] = useState({
    status: "idle",
    data: null,
    error: null,
  });

  const { status, data: pokemon, error } = state;

  function handleSubmit(e) {
    e.preventDefault();
    if(query.length===0) return
    setState({status:"pendig", data: null, error:null});
    getPokemon(query)
    .then((data)=>setState({status:"succes", data:data, error: null}))
    .catch((error)=>setState({status:"error", data: null, error:"El pokemon no existe"}))
  }


  const isFavorite=favorites.find((fav)=>fav.pokemon_name ===pokemon?.name) ? true : false
  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text"
      name="query"
      placeholder="Nombre del pokemon" 
      
      value={query}
      onChange={(e)=>setQuery(e.target.value)}/>
    </form>
    {status ==="idle" && (
      <div> <img src={img} alt="pokemon" />
      <p>Realiza tu busqueda</p>
      </div>
    )}
    {status==="pending" && (
      <div>
        <p>Cargando...</p>
      </div>
    )}
    { status ==="succes" && (
      <PokemonData
      dataPokemon={pokemon}
      onAddFavorite={onAddFavorite}
      onRemoveFavorite={onRemoveFavorite}
      isFavorite={isFavorite}

      />
    )}
    {status==="error" && <p style={{color:"red"}}>{error}</p>}
  </div>;
};

export default SearchPage;
