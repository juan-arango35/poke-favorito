import { tokenKey, BASE_URI } from "../config";

export default async function apiFetch(
    endpoint,
    { method, headers, body } = {}
  ) {
    const token = sessionStorage.getItem(tokenKey);
  
    if (token) {
      headers = {
        Authorization: `Bearer ${token}`,
        ...headers,
      };
    }
  /*   if (token) {
      headers = {
        Authorization: `Token token=${token}`,
        ...headers,
      };
    } */
  
    if (body) {
      headers = {
        "Content-Type": "application/json",
        ...headers,
      };
    }
  
    const config = {
      method: method || (body ? "POST" : "GET"),
      headers,
      body: body ? JSON.stringify(body) : null,
    };
  
    const response = await fetch(BASE_URI + endpoint, config);
  
    let data;
    if (!response.ok) {
      if(sessionStorage.getItem(tokenKey) && response.status ===401){
        sessionStorage.removeItem(tokenKey);
        window.location.reload()
      }
      try {
        data = await response.json();
      } catch (error) {
        throw new Error(response.statusText);
      }
      if (typeof data.errors === "object"){
        // Object into array of arrays
        const errors = Object.entries(data.errors);
        // Array of arrays into array of strings
        const messages = errors.map(([key, value]) => `${key} ${value}`);
        data.errors = messages;
      }
      throw new Error(data.errors);
    }
  
    try {
      data = await response.json();
    } catch (error) {
      data = response.statusText;
    }
  
    return data;
  }