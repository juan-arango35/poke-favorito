import React from 'react'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
const Autenticado = () => {
  const{logout} = useContext(AuthContext)
  return (
    <div>
      <h1>Bienvenidos a colecion de Pokemons</h1>
      <button onClick={logout}>Cerrar sesion</button>
    </div>
  )
}

export default Autenticado