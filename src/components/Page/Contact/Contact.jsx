import { useEffect } from "react";
import "./contact.scss";
import { MessageError } from "../../common/Messages/MessageError";

export const Contact = ({
  handleChange,
  handleSubmit,
  isError,
  setIsError,
  dataValidate,
  setDataValidate,
}) => {
  useEffect(() => {
    setIsError(false);
    setDataValidate(true);
  }, []);

  return (
    <div className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Want to know more?</h2>
        <p className="contact__text">
          Send us your questions and we will contact you
        </p>
        <form className="contact__formulary" onSubmit={handleSubmit}>
          {isError && <MessageError />}

          <div className="formulary__input">
            <label htmlFor="fullName">Nombre Completo</label>
            <input
              type="text"
              name="fullName"
              id=""
              placeholder="Nombre Completo"
              onChange={handleChange}
            />
          </div>
          <div className="formulary__input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id=""
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};
