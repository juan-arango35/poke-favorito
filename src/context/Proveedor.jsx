import { useEffect, useState } from "react";
import {  loginn , logoutt} from "../services/auth-service";

import { createUser, getUser } from "../services/user-service";
import { AuthContext } from "./AuthContext";
import { tokenKey } from "../config";


const Proveedor = ({ children }) => {
    //el de abajo es el estado para tarer los datos del usuario logeado
  const [user, setUser] = useState(null);
  console.log(user, "user");

   //utilzamos get
   useEffect(() => {
    getUser()
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }, []);

    //creamos un metodo para par en caso de ser valido nos lleve al search page/ lo pasamos a unautehenticatedApp
    function login(credentials) {
        loginn(credentials)
          .then((user) => setUser(user))
          .catch((error) => console.log(error));
      }

       //esta funcion para hacer lo mismo cuando creamos una cuenta
       function signup(userData){
      //observacion en el codigo fuente no esta esta auth
        createUser(userData)
        .then((user)=>setUser(user))
        .catch((error)=>console.log(error))
       }

       // esta esla funcion para salir de la sesion:
       function logout(){
        logoutt().then(()=>{
            sessionStorage.removeItem(tokenKey)
            setUser(null)
        })

       }

  return <AuthContext.Provider value={{user, login, signup, logout}}>{children}</AuthContext.Provider>;
};

export default Proveedor;
