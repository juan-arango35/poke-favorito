import { Link } from "react-router-dom";
import imgUser from "../assets/user-3-fill.svg";
import imgSearch from "../assets/search-fill.svg";
import imgStar from "../assets/star.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { MdCatchingPokemon } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
const Header = () => {
  const [visible, setVisible] = useState(false);
  const { logout } = useContext(AuthContext);

  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-500 text-white shadow-lg " >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MdCatchingPokemon className="h-6 w-6" />
          <span className="text-xl font-bold">Mi Sitio</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link
            to={"/profile"}
            className="flex items-center space-x-1 hover:text-gray-600 transition duration-300"
          >
            <FaRegUser className="h-6 w-6" />
            <span>Perfil</span>
          </Link>
          <Link
            to={"/"}
            className="flex items-center space-x-1 hover:text-gray-600 transition duration-300"
          >
            <FiSearch className="h-6 w-6" />
            <span>Buscar</span>
          </Link>
          <Link
            to={"/favorites"}
            className="flex items-center space-x-1 hover:text-gray-600 transition duration-300"
          >
            <FaRegStar className="h-6 w-6" />
            <span>Favoritos</span>
          </Link>
          <button
            onClick={logout}
            className="flex items-center space-x-1 hover:text-gray-600 transition duration-300"
          >
            <RiLogoutCircleRLine className="h-6 w-6" />
            <span>salir</span>
          </button>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={handleClick}
        >
          {visible ? (
            <FaRegWindowClose className="h-6 w-6 mr-5" />
          ) : (
            <GiHamburgerMenu className="h-6 w-6 mr-5" />
          )}
        </button>
      </div>
      {/*     menu desplegable para moviles */}
      <div
        className={`md:hidden ${
          visible ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <nav className="flex flex-col space-y-4 px-4 py-2 bg-blue-400">
          <Link
            to="/profile"
            className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-300"
          >
            <FaRegUser className="h-4 w-4" />
            <span className="font-bold">Inicio</span>
          </Link>
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-300"
          >
            <FiSearch className="h-4 w-4" />
            <span className="font-bold">Buscar</span>
          </Link>

          <Link
            to="/favorites"
            className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-300"
          >
            <FaRegStar className="h-4 w-4" />
            <span className="font-bold">Favoritos</span>
          </Link>
          <button onClick={logout} className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-300">
          <RiLogoutCircleRLine className="h-5 w-5" /><span className="font-bold">Salir</span>
            </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
