import React, { useContext, useEffect, useState } from "react";
import { DentistDetail } from "./DentistDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../../../Context/GlobalContext";

export const DentistDetailContainer = () => {
  const [dentist, setDentist] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const request = axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    request.then((res) => setDentist(res.data));
  }, []);
  console.log(dentist);

  return <DentistDetail dentist={dentist} />;
};
