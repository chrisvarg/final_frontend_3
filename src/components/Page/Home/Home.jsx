import React from "react";
import "./home.scss";
import { Card } from "../../common/Card/Card";
/**
 *usar users de la API
 * 2/22 => 51 min
 * usar el context para traer la infor
 *
 * llamar el context
 *
 * hacer la petición a la API, usar el dispatch
 *
 */
export const Home = ({ dentists, isDark, dispatch, favs }) => {
  return (
    <div className={isDark ? "home dark" : "home"}>
      <div className="home__container">
        <h1 className="home__title">Home</h1>
        <div className="home__dentist">
          {dentists.map((dentist) => {
            return (
              <Card
                key={dentist.id}
                data={dentist}
                dispatch={dispatch}
                favs={favs}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
