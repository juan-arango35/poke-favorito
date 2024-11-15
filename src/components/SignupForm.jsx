import { useState } from "react"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const SignupForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
    })

    const { signup } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        signup(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="email" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Ingresa tu email" 
        label= "email"
        />
        <input type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Ingresa tu contraseña"
        label= "password" />
        <input
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="Ingresa tu nombre"
        label= "first_name"
        />
        <input
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Ingresa tu apellido"
        label= "last_name"
        />
        <button type="submit">Crea un cuenta</button>

    </form>
  )
}

export default SignupForm