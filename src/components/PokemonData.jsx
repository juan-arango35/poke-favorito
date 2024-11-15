import React from 'react';

import { RiStarFill } from "react-icons/ri";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { GiWeightScale } from "react-icons/gi";
function formatId(id){
    id=String(id);
    return id.length < 2 ? `#00${id}` : id.length < 3 ? `#0${id}`: `#${id}`
}
const PokemonData = ({dataPokemon, onAddFavorite,onRemoveFavorite,isFavorite}) => {

const regularContent=(
    <>
<RiStarFill color="E0E0E0" /> Mark as Favorite
    </>
)

const favoriteContent=(
    <>
      <RiStarFill   color="#F2C94C" /> Remove Favorite
    </>
)



  return (
    <div>
        <h1>{dataPokemon.name}</h1> 
        <p>{formatId(dataPokemon.id)}</p>
        <img src={dataPokemon.sprites.other["official-artwork"].front_default} alt={dataPokemon.name} />
        <ul>
            {dataPokemon.types.map((element)=>(
                <li key={element.name}>{element.type.name}</li>
            ))}
        </ul>
        <div>
            <div>
                <GiWeightScale/>
                {dataPokemon.weight /10} kg 
                <p>Peso</p>
            </div>
            <div>
                <LiaRulerVerticalSolid/>
                {dataPokemon.height /10} m
                <p>Altura</p>
            </div>
        </div>
        <button onClick={()=>isFavorite ? onRemoveFavorite(dataPokemon) : onAddFavorite(dataPokemon)}>
            {isFavorite ? favoriteContent : regularContent}
        </button>
    </div>
  )
}

export default PokemonData