import React, { useContext } from "react";
import Header from "../components/Header";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const mayuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-[600px]  flex-col  ">
        <h1 className="text-3xl font-bold mt-4 mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <span className="font-bold text-4xl">Bienvenido :</span>{" "}
          {mayuscula(user.last_name)}{" "}
        </h1>
        <div>
          <p className="text-center w-full px-10">
            Esta aplicación permite a los usuarios explorar un catálogo de
            Pokémon obtenido de una API externa. Desde la página principal, los
            usuarios pueden buscar Pokémon, visualizar información detallada y
            añadirlos o quitarlos de su lista de favoritos. La funcionalidad de
            favoritos es completamente interactiva y dinámica, permitiendo
            gestionar la lista de manera instantánea y sin restricciones en la
            cantidad de Pokémon favoritos.
          </p>{" "}
          <br />
          <p className="text-center w-full px-10">
            Adicionalmente, la aplicación incluye un sistema de autenticación
            que permite a los usuarios registrarse y crear una cuenta
            personalizada. Esto asegura que cada usuario tenga acceso exclusivo
            a su propia lista de favoritos, brindando una experiencia más
            personalizada y segura. La combinación de interacción con la API y
            la gestión de cuentas personales hace de esta aplicación una
            herramienta completa para los fanáticos de Pokémon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
