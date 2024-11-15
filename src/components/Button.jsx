import React from 'react';

const Button = ({
  children,        // El contenido del botón (texto, ícono, etc.)
  type = 'button', // Tipo de botón, por defecto 'button'
  className = '',  // Clases CSS adicionales
  onClick,         // Manejador de eventos click
  disabled = false // Si está deshabilitado
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
