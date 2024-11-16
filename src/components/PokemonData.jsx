import React from 'react';

import { RiStarFill } from "react-icons/ri";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { GiWeightScale } from "react-icons/gi";
import Button from './Button';
function formatId(id){
    id=String(id);
    return id.length < 2 ? `#00${id}` : id.length < 3 ? `#0${id}`: `#${id}`
}
const PokemonData = ({dataPokemon, onAddFavorite,onRemoveFavorite,isFavorite}) => {

const regularContent=(
    <>
<RiStarFill color="E0E0E0" /> Agrega a Favoritos
    </>
)

const favoriteContent=(
    <>
      <RiStarFill   color="#F2C94C" /> Quitar de Favoritos
    </>
)



  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold'>{dataPokemon.name}</h1> 
        <p className='text-lg font-bold'>{formatId(dataPokemon.id)}</p>
        <img 
        className='w-[200px] h-[200px]'
        src={dataPokemon.sprites.other["official-artwork"].front_default} alt={dataPokemon.name} />
        <ul className='flex gap-2 mb-5'>
            {dataPokemon.types.map((element)=>(
                <li key={element.name}>{element.type.name}</li>
            ))}
        </ul>
        <div className='flex gap-5'>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center gap-6'>
                <GiWeightScale/>
                {dataPokemon.weight /10} kg 
                </div>
              
                <p className='text-center font-bold'>Peso</p>
            </div>
            <span className='w-0.5 h-10 bg-gray-400'></span>
            <div className='flex flex-col'>
            <div className='flex justify-center items-center gap-6'>
                <LiaRulerVerticalSolid/>
                {dataPokemon.height /10} m
                </div>
                <p className='text-center font-bold'>Altura</p>
            </div>
        </div>
        <Button 
        className='mt-5 w-[200px] flex justify-around items-center'
        onClick={()=>isFavorite ? onRemoveFavorite(dataPokemon) : onAddFavorite(dataPokemon)}>
            {isFavorite ? favoriteContent : regularContent}
        </Button>
    </div>
  )
}

export default PokemonData