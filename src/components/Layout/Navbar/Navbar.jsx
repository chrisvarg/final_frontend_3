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
              src="data:image/png;base64,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"
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
