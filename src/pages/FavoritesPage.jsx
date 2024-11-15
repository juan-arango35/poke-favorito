import React from "react";
import starFill from "../assets/star-fill.svg";

const FavoritesPage = ({ favorites }) => {
  return (
    <div>
      <h1>Favoritos</h1>
      <ul>
        {favorites.map((favorite) => (
          <li type={favorite.pokemon_type} key={favorite.id}>
            <div>
              <img src={starFill} alt="estrella" />
              <p type={favorite.pokemon_type}>#{favorite.id}</p>
            </div>
            <div>
              <img src={favorite.pokemon_avatar_url} alt="pokemon" />
            </div>
            <div type={favorite.pokemon_type}>
              <p>{favorite.pokemon_name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
