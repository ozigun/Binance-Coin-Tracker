import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";

function App() {
  const [data, setData] = useState([]);
  const [usdt, setUsdt] = useState([]);

  let interval = null;

  useEffect(() => {
    interval = setInterval(getData(), 1);
    getData();
  });

  const usdCoin = data.filter((data) => {
    return data.symbol.toLowerCase().includes("usdt".toLowerCase());
  });

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
        <Routes>
          <Route
            path="/"
            element={<AdminPanel userData={usdCoin} usdt={usdt} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
