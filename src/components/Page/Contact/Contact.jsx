import React from "react";

export const Contact = () => {
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <form action="">
        <input type="text" name="name" id="" placeholder="Nombre Completo" />
        <input type="text" name="email" id="" placeholder="Email" />
        <button>Enviar</button>
      </form>
    </div>
  );
};
