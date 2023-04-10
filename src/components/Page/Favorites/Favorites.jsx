import { useContext } from "react";
import { Card } from "../../common/Card/Card";
import "./favorites.scss";
import { GlobalContext } from "../../../Context/GlobalContext";

export const Favorites = ({ favs, isDark }) => {
  const { state, dispatch } = useContext(GlobalContext);

  console.log(favs);
  return (
    <div className={isDark ? "favorite dark" : "favorite"}>
      <div className="favorite__container">
        <h1 className="favorite__title">Favoritos</h1>
        <div className="favorite__dentist">
          {favs.map((fav) => {
            return (
              <Card
                key={fav.id}
                data={fav}
                dispatch={dispatch}
                favs={state.favs}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
