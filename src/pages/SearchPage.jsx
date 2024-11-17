import React, { useContext, useState } from "react";
import { getPokemon } from "../services/pokeapi-service";
import PokemonData from "../components/PokemonData";
import img from "../assets/busqueda.png";
import Header from "../components/Header";
import Button from "../components/Button";

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
    if (query.length === 0) return;
    setState({ status: "pendig", data: null, error: null });
    getPokemon(query)
      .then((data) => setState({ status: "succes", data: data, error: null }))
      .catch((error) =>
        setState({ status: "error", data: null, error: "El pokemon no existe" })
      );
  }

  const isFavorite = favorites.find((fav) => fav.pokemon_name === pokemon?.name)
    ? true
    : false;
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Nombre del pokemon"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" px-4 py-2 rounded-lg mt-4"
        />
        <Button className="ml-4" type="submit">Buscar</Button>
      </form>
      {status === "idle" && (
        <div className="flex flex-col justify-center items-center">
          {" "}
          <img src={img} alt="pokemon" className="w-[200px]"/>
          <p className="mt-4">Realiza tu Busqueda</p>
        </div>
      )}
      {status === "pending" && (
        <div>
          <p><PacmanLoader /></p>
        </div>
      )}
      {status === "succes" && (
        <PokemonData
          dataPokemon={pokemon}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
          isFavorite={isFavorite}
        />
      )}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SearchPage;
