import { Avatar, Button, CardActions, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
      <div className="card__name">
        <Avatar sx={{ bgcolor: "#ee1740" }} alt="Remy Sharp">
          {data.name[0]}
        </Avatar>
        <p>{data.name}</p>
      </div>
      <figure className="card__image">
        <img src="./src/assets/doctor.jpg" alt="" />
      </figure>
      <p>{data.email}</p>
      <p>{data.website}</p>
      <div className="card__detail">
        <figure className="card__favs" onClick={selectFavorite}>
          <img src={`./src/assets/favorite${"_unselect"}.svg`} alt="" />
        </figure>
        <Link to={`/dentist/${data.id}`}>
          <button>Ver detalles</button>
        </Link>
      </div>
    </div>
  );
};
