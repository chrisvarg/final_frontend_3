import React, { useContext, useEffect, useState } from "react";
import { Home } from "./Home";
import axios from "axios";
import { GlobalContext } from "../../../Context/GlobalContext";

export const HomeContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  // const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const dentists = axios.get("https://jsonplaceholder.typicode.com/users");
    dentists.then((res) => dispatch({ type: "GET_USERS", payload: res.data }));
  }, []);

  // console.log(state.users);
  return (
    <Home
      dentists={state.users}
      isDark={state.isDark}
      dispatch={dispatch}
      favs={state.favs}
    />
  );
};
