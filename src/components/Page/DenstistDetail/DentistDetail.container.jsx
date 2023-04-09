import React, { useEffect, useState } from "react";
import { Dentist } from "./DentistDetail";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  return <Dentist key={dentist.id} dentist={dentist} />;
};
