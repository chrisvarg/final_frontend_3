import { Avatar, Button, CardActions, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./card.scss";

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../Context/GlobalContext";

export const Card = ({ data, dispatch, favs }) => {
  console.log(data);

  const selectFavorite = () => {
    return favs.some((fav) => fav.id === data.id)
      ? "https://res.cloudinary.com/dzaeoe16l/image/upload/v1681248114/favorite.svg"
      : `https://res.cloudinary.com/dzaeoe16l/image/upload/v1681248114/favorite_unselect.svg`;
    };

  console.log(selectFavorite());

  return (
    <div className="card">
      <Link to={`/dentist/${data.id}`}>
        <div className="card__name">
          <p>{data.name}</p>
        </div>
        <figure className="card__image">
          <img
            src="https://res.cloudinary.com/dzaeoe16l/image/upload/v1681248135/doctor.jpg"
            alt={data.name}
            title={data.name}
          />
        </figure>
        <div className="card__contact">
          <p>
            {data.address.street}, {data.address.city}
          </p>
        </div>
      </Link>
      <div className="card__detail">
        <figure className="card__favs">
          <img
            src={selectFavorite()}
            onClick={() => dispatch({ type: "HANDLE_FAVORITE", payload: data })}
          />
        </figure>
        <Link to={`/dentist/${data.id}`}>
          <button>Ver detalles</button>
        </Link>
      </div>
    </div>
  );
};
