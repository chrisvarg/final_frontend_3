import React, { useContext, useEffect, useState } from "react";
import { Favorites } from "./Favorites";
import { GlobalContext } from "../../../Context/GlobalContext";

export const FavoritesContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(state.favs);
  }, []);

  return <Favorites favs={favorites} isDark={state.isDark} />;
};
