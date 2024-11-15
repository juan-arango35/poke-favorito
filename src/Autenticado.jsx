import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import Profile from "./pages/Profile";
import {
  createFavorite,
  getFavorites,
  removeFavorite,
} from "./services/favorite-service";

const Autenticado = () => {
  const [favorites, setFavorites] = useState([]);

  function handleAddFavorite(pokemon) {
    const data = {
      pokemon_name: pokemon.name,
      pokemon_id: pokemon.id,
      pokemon_type: pokemon.types[0].type.name,
      pokemon_avatar_url:
        pokemon.sprites.other["official-artwork"].front_default,
    };
    createFavorite(data)
      .then((newFavorite) => setFavorites([...favorites, newFavorite]))
      .catch((error) => console.log(error));
  }

  function handleRemoveFavorite(pokemon) {
    const favorite = favorites.find(
      (favorite) => favorite.pokemon_name === pokemon.name
    );
    removeFavorite(favorite.id).then(() => {
      const newFavorites = favorites.filter(
        (favorite) => favorite.pokemon_name !== pokemon.name
      );
      setFavorites(newFavorites);
    });
  }

  useEffect(() => {
    getFavorites().then((data) => setFavorites(data));
  }, []);
  return (
    <div className="h-screen -mt-8 -mx-8">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SearchPage
                favorites={favorites}
                onRemoveFavorite={handleRemoveFavorite}
                onAddFavorite={handleAddFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={<FavoritesPage favorites={favorites} />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Autenticado;
