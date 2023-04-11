import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import CustomizedSwitches from "../../common/SwitchDarkMode";
import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";

export const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleChangeTheme = () => {
    dispatch({ type: "SWITCH_DARK_MODE" });
  };
  return (
    <div className={state.isDark ? "navbar dark" : "navbar"}>
      <div className="navbar__container">
        <div className="navbar__image">
          <figure>
            <img
              src="https://res.cloudinary.com/dzaeoe16l/image/upload/v1681249052/dh-icon.png"
              alt="icon"
            />
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
          <li></li>
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
          
          <li>
            <CustomizedSwitches handleChangeTheme={handleChangeTheme} />
          </li>
        </ul>
      </div>
    </div>
  );
};
