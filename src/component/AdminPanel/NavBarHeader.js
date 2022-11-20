import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function NavBarHeader(props) {
  const [name, setName] = useState("");

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
      <div class="container-fluid">
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link">
                <strong class="text-white">Coin List</strong>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/favorite" class="nav-link">
                <strong class="text-white">Favoriler</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBarHeader;
