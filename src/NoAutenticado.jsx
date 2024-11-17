import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

const NoAutenticado = () => {
  const [showLogin, setShowLogin] = useState(false);

  //funcion para mostrar o acultar el login
  function handleCLick(e) {
    e.preventDefault();
    setShowLogin(!showLogin);
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 -mt-12">
      <h1 className="text-3xl text-black font-bold mb-7 transition-transform duration-300 ease-in-out transform hover:scale-110">
        Bienvenidos a la colección de Pokemones
      </h1>
      {showLogin ? <LoginForm /> : <SignupForm />}
      <button onClick={handleCLick}>
        {showLogin ? "Crear cuenta" : "Iniciar sesión"}
      </button>
    </div>
  );
};

export default NoAutenticado;

/* angelito@mail.com 
123456
*/
