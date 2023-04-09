import { Avatar, Button, CardActions, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./card.scss";

import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ data }) => {
  console.log(data);

  const selectFavorite = (e) => {
    const element = e.target;
    if (element.src.includes("_unselect")) {
      console.log((element.src = element.src.replace("_unselect", "")));
      return;
    }

    element.src = element.src.replace("favorite", "favorite_unselect");
    return;
  };

  return (
    <div className="card">
      <Link to={`/dentist/${data.id}`}>
        <div className="card__name">
          <p>{data.name}</p>
        </div>
        <figure className="card__image">
          <img
            src="https://raw.githubusercontent.com/Frontend-III/fe3-final/main/public/images/doctor.jpg"
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
        <figure className="card__favs" onClick={selectFavorite}>
          <img src={`./src/assets/favorite${"_unselect"}.svg`} alt="" />
        </figure>
        <Link to={`/dentist/${data.id}`}>
          <button>Ver detalles</button>
        </Link>
      </div>
      {/* <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          // onClick={() => dispatch({ type: "HANDLE_FAVORITE", payload: user })}
        >
          <FavoriteIcon
          // color={
          //   favs.some((fav) => fav.id === user.id) ? "error" : "disabled"
          // }
          />
        </IconButton>
        <Link to={`/dentist/${data.id}`}>
          <Button variant="contained">Ver detalle</Button>
        </Link>
      </CardActions> */}
    </div>
  );
};
