import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

//esta es la funcion para crear usurio y luego pueda hacer el login este se usa en el signupForm

export function createUser(userData){
    return apiFetch("/signup", {body:userData}).then((userData)=>{
        const {token, ...user} = userData;
        sessionStorage.setItem(tokenKey, token)
        return user;
    })
}

/* traer datos del ususario para el perfil */
export function getUser(){
    return apiFetch("/profile").then((userData)=>{
        const {_token, ...user} = userData;
        return user;
    })
}