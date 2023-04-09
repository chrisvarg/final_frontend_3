import React, { useEffect, useState } from "react";
import { Contact } from "./Contact";
import { MessageError } from "../../common/Messages/MessageError";
import Swal from "sweetalert2";

export const ContactContainer = () => {
  const [data, setData] = useState({ fullName: "", email: "" });
  const [isError, setIsError] = useState(true);
  const [dataValidate, setDataValidate] = useState(false);
  useEffect(() => {
    setDataValidate(false);
  }, []);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFullName(data.fullName) || !validateEmail(data.email)) {
      console.log("error");
      setIsError(true);
      setDataValidate(false);
      return;
    }

    console.log("paso");

    validateComplete();
    setDataValidate(true);
    setIsError(false);
    setData({ fullName: "", email: "" });
    e.target.reset();

    return;
  };

  const validateFullName = (name) => {
    const regex = /^[a-zA-Z]+$/;
    return name !== "" && name.length > 5 && regex.test(name);
  };
  const validateEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email !== "" && regex.test(email);
  };

  const validateComplete = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: true,
    });
  };

  return (
    <Contact
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isError={isError}
      setIsError={setIsError}
      dataValidate={dataValidate}
      validateComplete={validateComplete}
      setDataValidate={setDataValidate}
    />
  );
};
