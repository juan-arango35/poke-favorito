import React from "react";
import starFill from "../assets/star-fill.svg";
import Header from "../components/Header";
import styled from "styled-components";

const Pokemoncard = styled("div")`
  border: 2px solid ${({ type }) => typeColors[type]};
  border-radius: 10px;
  width: 250px;
  height: auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContentName = styled("div")`
  color: white;
  font-weight: bold;
  height: 25px;
  width: 120%;
  margin-bottom: -10px;
  padding-bottom: 5px;
  background: ${({ type }) => typeColors[type]};
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

const typeColors = {
  grass: "#74CB48",
  poison: "#A43E9E",
  fire: "#F57D31",
  water: "#6493EB",
  electric: "#F9CF30",
  ground: "#DEC16B",
  flying: "#A891EC",
  bug: "#A7B723",
  normal: "#AAA67F",
  fighting: "#C12239",
  psychic: "#FB5584",
  rock: "#B69E31",
  ice: "#9AD6DF",
  dragon: "#7037FF",
  ghost: "#705693",
  dark: "#75574C",
  steel: "#B7B9D0",
  fairy: "#E69EAC",
  unknown: "#68A090",
  shadow: "#000",
};
const FavoritesPage = ({ favorites }) => {
  const capitalizableLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold mt-4 mb-4">Favoritos</h1>
      <ul className="flex flex-wrap justify-center gap-9">
        {favorites.map((favorite) => (
          <Pokemoncard type={favorite.pokemon_type} key={favorite.id}>
            <div className="flex justify-between w-full mb-4">
              <img src={starFill} alt="estrella" className="w-5" />
              <p type={favorite.pokemon_type} className="font-bold">#{favorite.id}</p>
            </div>
            <div className="flex justify-center mb-3">
              <img
                src={favorite.pokemon_avatar_url}
                alt="pokemon"
                className="w-48 transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <ContentName type={favorite.pokemon_type}>
              <p className="transition-transform duration-300 ease-in-out transform hover:scale-110">{capitalizableLetter(favorite.pokemon_name)}</p>
            </ContentName>
          </Pokemoncard>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
