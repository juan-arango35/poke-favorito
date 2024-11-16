import { Link } from "react-router-dom";
import imgUser from "../assets/user-3-fill.svg";
import imgSearch from "../assets/search-fill.svg";
import imgStar from "../assets/star-fill.svg";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Header = () => {
    const { logout } = useContext(AuthContext);
  return (
    <div className="bg-blue-500 py-2">
      <ul className="flex justify-end items-center mr-5">
        <li className="mr-5">
          <Link to="/profile">
            <img src={imgUser} alt="imgUser"  className="w-10"/>
          </Link>
        </li>
        <li  className="mr-5">
          <Link to="/">
            <img src={imgSearch} alt="imgSearch" className="w-10" />
          </Link>
        </li>
        <li  className="mr-5">
          <Link to="/favorites">
            <img src={imgStar} alt="imgStar" className="w-[35px]" />
          </Link>
        </li>
        <li  className="mr-5">
        <button onClick={logout}>Logout</button>
        </li>
       
      </ul>
 
    </div>
  );
};

export default Header;
