import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //falta agregara el login del auth
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    login(formData);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  return <div >
    <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email"
        />
        <input type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="password"
        />
        <button type="submit">Login</button>
    </form>
  </div>;
};

export default LoginForm;
