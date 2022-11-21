import FavoriteCard from "./FavoriteCard";
import React, { useEffect, useState } from "react";

function FavoriteList({ favorite, usdt }) {
  return (
    <div class="card-deck row-cols-3  g-4">
      {favorite.map((user, i) => {
        return (
          <FavoriteCard
            key={i}
            id={favorite[i].id}
            name={localStorage.getItem(favorite[i].id) * usdt.price}
          />
        );
      })}
    </div>
  );
}
export default FavoriteList;
