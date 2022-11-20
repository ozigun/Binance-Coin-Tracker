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
  const [favoriteCoin, setFavoriteCoin] = useState([]);

  let interval = null;

  useEffect(() => {
    interval = setInterval(getData(), 1);
    getData();
  }, []);

  const usdCoin = data.filter((data) => {
    return data.symbol.toLowerCase().includes("usdt".toLowerCase());
  });

  const favoriteFilteredCoin = favoriteCoin.filter((favoriteCoin) => {
    return favoriteCoin.toLowerCase().includes(favoriteCoin.toLowerCase());
  });
  const favCoin = [];
  const favorite = (e) => {
    favCoin.push(e);
    setFavoriteCoin(favCoin);
    console.log(favCoin);
    console.log(favoriteCoin);
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
                favorite={favoriteFilteredCoin}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
