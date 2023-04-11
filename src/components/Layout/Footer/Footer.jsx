import { useContext } from "react";
import "./footer.scss";
import { GlobalContext } from "../../../Context/GlobalContext";

export const Footer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div className={state.isDark ? "footer dark" : "footer"}>
      <div className="footer__container">
        <div className="footer__header">
          <h3>Digital Odongologico</h3>
        </div>
        <div className="footer__company">
          <div className="company">
            <figure className="company__image">
              <img
                src="https://res.cloudinary.com/dzaeoe16l/image/upload/v1681249052/dh-icon.png"
                alt=""
              />
            </figure>

            <ul className="company__list">
              <li className="company__items">
                <a href="#">
                  <img
                    src="https://raw.githubusercontent.com/Frontend-III/fe3-final/main/public/images/ico-facebook.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="company__items">
                <a href="#">
                  <img
                    src="https://github.com/Frontend-III/fe3-final/blob/main/public/images/ico-instagram.png?raw=true"
                    alt=""
                  />
                </a>
              </li>
              <li className="company__items">
                <a href="#">
                  <img
                    src="https://github.com/Frontend-III/fe3-final/blob/main/public/images/ico-whatsapp.png?raw=true"
                    alt=""
                  />
                </a>
              </li>
              <li className="company__items">
                <a href="#">
                  <img
                    src="https://github.com/Frontend-III/fe3-final/blob/main/public/images/ico-tiktok.png?raw=true"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
