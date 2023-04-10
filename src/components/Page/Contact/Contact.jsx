import { useContext, useEffect } from "react";
import "./contact.scss";
import { MessageError } from "../../common/Messages/MessageError";
import { GlobalContext } from "../../../Context/GlobalContext";

export const Contact = ({
  handleChange,
  handleSubmit,
  isError,
  setIsError,
  dataValidate,
  setDataValidate,
}) => {
  const { state } = useContext(GlobalContext);

  useEffect(() => {
    setIsError(false);
    setDataValidate(true);
  }, []);

  return (
    <div className={state.isDark ? "home dark" : "home"}>
      <div className="contact__container">
        <h1 className="contact__title">Want to know more?</h1>
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
