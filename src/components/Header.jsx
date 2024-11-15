import { Link } from "react-router-dom";
import imgUser from "../assets/user-3-fill.svg";
import imgSearch from "../assets/search-fill.svg";
import imgStar from "../assets/star-fill.svg";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Header = () => {
    const { logout } = useContext(AuthContext);
  return (
    <div>
      <ul>
        <li>
          <Link to="/profile">
            <img src={imgUser} alt="imgUser" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={imgSearch} alt="imgSearch" />
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <img src={imgStar} alt="imgStar" />
          </Link>
        </li>
       
      </ul>
      <button onClick={logout}>Cerrar sesion</button>
    </div>
  );
};

export default Header;
