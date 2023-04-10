import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
  users: [],
  isDark: false,
  favs: JSON.parse(localStorage.getItem("favs")) || [], // logica cart
};

const removeFavorite = (id, state) => {
  const newArray = state.favs.filter((fav) => fav.id !== id);
  localStorage.setItem("favs", JSON.stringify(newArray));
  return newArray;
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "HANDLE_FAVORITE":
      const isFavorite = state.favs.some((fav) => fav.id === action.payload.id);

      isFavorite
        ? removeFavorite(action.payload.id, state)
        : localStorage.setItem(
            "favs",
            JSON.stringify([...state.favs, action.payload])
          );

      return isFavorite
        ? { ...state, favs: removeFavorite(action.payload.id, state) }
        : { ...state, favs: [...state.favs, action.payload] };
    case "SWITCH_DARK_MODE":
      return { ...state, isDark: !state.isDark };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
