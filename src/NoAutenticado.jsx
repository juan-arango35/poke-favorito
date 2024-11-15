import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

const NoAutenticado = () => {
  const [showLogin, setShowLogin] = useState(false)

  //funcion para mostrar o acultar el login
  function handleCLick(e){
    e.preventDefault()
    setShowLogin(!showLogin)
  }
  return (
    <div>
      <h1>Bienvenidos a colecion de Pokemons</h1>
      {
        showLogin ?(
          <LoginForm/>
        ):(
          <SignupForm/>
        )
      }
      <button onClick={handleCLick}>{showLogin ? "Crear cuenta" : "Iniciar sesion"}</button>
    </div>
  )
}

export default NoAutenticado