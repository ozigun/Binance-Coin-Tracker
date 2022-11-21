import React, { useEffect, useState } from "react";

import FavoriteList from "../component/AdminPanel/FavoriteList";

function Favorite(props) {
  return (
    <div>
      <FavoriteList favorite={props.favorite} />
    </div>
  );
}
export default Favorite;
