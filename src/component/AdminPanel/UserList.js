import User from "./User";

function UserList(props) {
  const favorite = (e) => {
    props.favorite(e);
    console.log(e);
  };

  return (
    <div className="App mx-5">
      <h1>Coin List</h1>
      <table class="table ">
        <thead class="bg-warning ">
          <tr>
            <th>Sembol</th>
            <th>Fiyat</th>
            <th>Favori</th>
          </tr>
        </thead>
        {props.userData.map((user, i) => {
          return (
            <User
              key={i}
              id={props.userData[i].symbol}
              name={props.userData[i].price * props.usdt.price}
              favorite={favorite}
            />
          );
        })}
      </table>
    </div>
  );
}
export default UserList;
