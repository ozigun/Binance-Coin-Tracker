import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import NavBarHeader from "./component/AdminPanel/NavBarHeader";
import Favorite from "./pages/Favorite";

function App() {
  const [data, setData] = useState([]);
  const [usdt, setUsdt] = useState([]);
  const [favoriteCoin, setFavoriteCoin] = useState([
    {
      id: "Favori Coinleriniz",
      name: "00.00",
    },
  ]);

  let interval = null;
  let interval2 = null;

  useEffect(() => {
    interval = setInterval(getData(), 1);
    getData();
    clearInterval();
  });

  const usdCoin = data.filter((data) => {
    return data.symbol.toLowerCase().includes("usdt".toLowerCase());
  });

  const favoriteFilteredCoin = data.map((i) => {
    favoriteCoin.filter((favoriteCoin) => {
      return favoriteCoin.id
        .toLowerCase()
        .includes(favoriteCoin.id.toLowerCase());
    });
  });

  const favCoin = favoriteCoin;

  const favorite = (name) => {
    favCoin.push(name);
    setFavoriteCoin(favCoin);
    window.localStorage.setItem(name.id, name.name);
    console.log(favoriteCoin);
    console.log(favoriteFilteredCoin);
  };

  function getData() {
    axios
      .get("https://www.binance.com/api/v3/ticker/price")
      .then((response) => {
        setData(response.data);
        console.log(data);
      });
    axios
      .get("https://www.binance.com/api/v3/ticker/price?symbol=USDTTRY")
      .then((response) => {
        setUsdt(response.data);
        console.log(usdt);
      });

    data.map((user, i) => {
      window.localStorage.setItem(data[i].symbol, data[i].price);
    });
  }

  return (
    <div className="App">
      <Router>
        <NavBarHeader />
        <Routes>
          <Route
            path="/"
            element={
              <AdminPanel userData={usdCoin} usdt={usdt} favorite={favorite} />
            }
          />
          <Route
            path="/favorite"
            element={
              <Favorite
                userData={usdCoin}
                usdt={usdt}
                favorite={favoriteCoin}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
