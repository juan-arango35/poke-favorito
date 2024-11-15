import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "./Button";

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
  return (
    <div className="border border-sky-500 h-auto px-8 py-4 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
          className="pl-3 py-1"
         
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="password"
           className="pl-3 py-1"
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
