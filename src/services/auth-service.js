import { tokenKey } from "../config";
import apiFetch from "./api-fetch";
//esta funcion recoge informacion del usuario para hacer el login



export function loginn(credentials){

  return apiFetch("/login", {body: credentials}).then(userData=>{
    const {token, ...user}=userData;
    sessionStorage.setItem(tokenKey, token);
    return user
  })
}

export function logoutt(){
  return apiFetch("/logout", {method: "DELETE"});
}