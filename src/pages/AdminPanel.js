import React, { useEffect, useState } from "react";
import SearchBox from "../component/AdminPanel/SearchBox";

import UserList from "../component/AdminPanel/UserList";

function AdminPanel(props) {
  const [searchItem, setSearchItem] = useState("");

  const onSearchChange = (e) => {
    setSearchItem(e.target.value);
    console.log(searchItem);
  };

  const filteredCoin = props.userData.filter((coin) => {
    return coin.symbol.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <div>
      <SearchBox searchChange={onSearchChange} />
      <UserList userData={filteredCoin} usdt={props.usdt} />
    </div>
  );
}
export default AdminPanel;
