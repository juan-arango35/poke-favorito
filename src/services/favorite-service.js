import apiFetch from "./api-fetch";
//esta funcion me sirve para crear un favorito

export function createFavorite(data){
    return apiFetch("/favorites", {body: data})
}

export function removeFavorite(id){
    return apiFetch(`/favorites/${id}`, {method: "DELETE"})
}

//esta funcion me sirve para obtener todos favoritos

export function getFavorites(){
    return apiFetch("/favorites")
}