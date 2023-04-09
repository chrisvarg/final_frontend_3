import React, { useEffect } from "react";
import { Dentist } from "./Dentist";
import { useParams } from "react-router-dom";
import axios from "axios";

export const DentistContainer = () => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const dentist = axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dentist.then((res) => console.log(res.data));
  }, []);
  return <Dentist />;
};
