import React from "react";

import { RiStarFill } from "react-icons/ri";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { GiWeightScale } from "react-icons/gi";
import Button from "./Button";
import { clsx } from "clsx";
import styled, { css } from "styled-components";

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

const ContentTypes = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  margin-top: 20px;

`;
const StyleType = styled.p`
  ${({ type }) => css`
    background: ${typeColors[type]};
    font-weight: bold;
    color: white;
    border-radius: 10px;
    padding: 5px 12px;
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
  `}
`; 
function formatId(id) {
  id = String(id);
  return id.length < 2 ? `#00${id}` : id.length < 3 ? `#0${id}` : `#${id}`;
}
const PokemonData = ({
  dataPokemon,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}) => {
  const regularContent = (
    <>
      <RiStarFill color="E0E0E0" /> Agrega a Favoritos
    </>
  );

  const favoriteContent = (
    <>
      <RiStarFill color="#F2C94C" /> Quitar de Favoritos
    </>
  );

  //funcion para que se muestre en amyuscula el nombre del pokemon
  const capitalizableLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-4">{capitalizableLetter(dataPokemon.name)}</h1>
      <p className="text-lg font-bold">{formatId(dataPokemon.id)}</p>
      <img
        className="w-[200px] h-[200px] transition-transform duration-300 ease-in-out transform hover:scale-110"
        src={dataPokemon.sprites.other["official-artwork"].front_default}
        alt={dataPokemon.name}
      />
      <ContentTypes >
        {dataPokemon.types.map((element, index) => {
          
          return <StyleType key={index} type={element.type.name} className="transition-transform duration-300 ease-in-out transform hover:scale-110">{element.type.name}</StyleType>;
        })}
      </ContentTypes>
      <div className="flex gap-5">
        <div className="flex flex-col">
          <div className="flex justify-center items-center gap-6">
            <GiWeightScale />
            {dataPokemon.weight / 10} kg
          </div>

          <p className="text-center font-bold mt-4">Peso</p>
        </div>
        <span className="w-0.5 h-16 bg-gray-400"></span>
        <div className="flex flex-col">
          <div className="flex justify-center items-center gap-6">
            <LiaRulerVerticalSolid />
            {dataPokemon.height / 10} m
          </div>
          <p className="text-center font-bold mt-4">Altura</p>
        </div>
      </div>
      <Button
        className="mt-5 w-[200px] flex justify-around items-center transition-transform duration-300 ease-in-out transform hover:scale-110"
        onClick={() =>
          isFavorite
            ? onRemoveFavorite(dataPokemon)
            : onAddFavorite(dataPokemon)
        }
      >
        {isFavorite ? favoriteContent : regularContent}
      </Button>
    </div>
  );
};

export default PokemonData;
