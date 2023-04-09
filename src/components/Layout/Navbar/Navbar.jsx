import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import CustomizedSwitches from "../../common/SwitchDarkMode";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__image">
          <figure>
            <img src="./src/assets/icon-digital.png" alt="icon" />
          </figure>
        </div>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "active" : "navbar__menu"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              to="/dentist"
              className={({ isActive }) =>
                isActive ? "active" : "navbar__menu"
              }
            >
              Dentist_id
            </NavLink> */}
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? "active" : "navbar__menu"
              }
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favs"
              className={({ isActive }) =>
                isActive ? "active" : "navbar__menu"
              }
            >
              Favoritos
            </NavLink>
          </li>
          <CustomizedSwitches />
        </ul>
      </div>
    </div>
  );
};
