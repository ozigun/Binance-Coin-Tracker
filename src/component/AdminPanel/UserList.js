import User from "./User";

function UserList(props) {
  return (
    <div className="App mx-5">
      <h1>Coin List</h1>
      <table class="table ">
        <thead class="bg-warning ">
          <tr>
            <th>Sembol</th>
            <th>Fiyat</th>
            <th>FAvori</th>
          </tr>
        </thead>
        {props.userData.map((user, i) => {
          return (
            <User
              key={i}
              id={props.userData[i].symbol}
              name={props.userData[i].price * props.usdt.price}
            />
          );
        })}
      </table>
    </div>
  );
}
export default UserList;
