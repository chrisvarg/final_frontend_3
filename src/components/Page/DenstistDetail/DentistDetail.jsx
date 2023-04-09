import React from "react";
import "./dentistDetail.scss";

export const Dentist = ({ dentist }) => {
  return (
    <div className="dentist">
      <div className="dentist__container">
        <h1 className="dentist__title">Detalles del Odontologo</h1>

        <div className="dentist__detail">
          <figure className="dentist__image">
            <img
              src="https://raw.githubusercontent.com/Frontend-III/fe3-final/main/public/images/doctor.jpg"
              alt={dentist.name}
              title={dentist.name}
            />
          </figure>

          <div className="dentist__info">
            <ul className="info__list">
              <li className="info__item">
                <h3>Id</h3>
                <p>{dentist.id}</p>
              </li>
              <li className="info__item">
                <h3>Nombre</h3>
                <p>dentist.name</p>
              </li>
              <li className="info__item">
                <h3>Email</h3>
                <p>{dentist.email}</p>
              </li>
              <li className="info__item">
                <h3>Website</h3>
                <p>{dentist.website}</p>
              </li>
              <li className="info__item">
                <h3>Telefono</h3>
                <p>{dentist.phone}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
