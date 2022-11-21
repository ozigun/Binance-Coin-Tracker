import FavoriteCard from "./FavoriteCard";
import React, { useEffect, useState } from "react";

function FavoriteList({ favorite }) {
  return (
    <div class="card-deck row-cols-3  g-4">
      {favorite.map((user, i) => {
        return (
          <FavoriteCard
            key={i}
            id={favorite[i].id}
            name={localStorage.getItem(favorite[i].id)}
          />
        );
      })}
    </div>
  );
}
export default FavoriteList;
