import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button"
const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

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
    <div className="border border-sky-500 h-auto px-8 py-4 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white">
        <input
        className="pl-3 py-1"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ingresa tu email"
          label="email"
         
        />
        <input
       className="pl-3 py-1"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Ingresa tu contraseña"
          label="password"
        />
        <input
          className="pl-3 py-1"
          name="first_name"
          type="text"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
          label="first_name"
        />
        <input
          className="pl-3 py-1"
          name="last_name"
            type="text"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Ingresa tu apellido"
          label="last_name"
        />
        <Button type="submit">Crea un cuenta</Button>
      </form>
    </div>
  );
};

export default SignupForm;
