import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
  users: [],
  isDark: false,
  favs: [], // logica cart
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      /**
       * hacer una accion de tipo getUsers y que envie como payload esos usuarios
       * en la lista de dentintas en useEffect
       */
      // console.log(action);
      // console.log(action.payload);
      return { ...state, users: action.payload };
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
