import React, { useState, useEffect } from "react";

function User(props) {
  let interval = null;
  /*useEffect(() => {
    interval = setInterval(onSubmit(), 15);
    onSubmit();
  });*/

  const onSubmit = () => {
    props.favorite(props);
    console.log({ props });
    //window.localStorage.setItem(props.id, props.name);
  };

  const refresh = () => {
    //window.localStorage.setItem(props.id, props.name);
  };

  return (
    <tbody className="alert-warning border border-warning">
      <tr className="border border-warning">
        <th className="border border-warning">{props.id}</th>
        <td className="border border-warning">{props.name}</td>
        <td className="border border-warning">
          <button
            type="button"
            class="btn btn-sm btn-warning"
            onClick={onSubmit}
          >
            Favorilere Ekle
          </button>
        </td>
      </tr>
    </tbody>
  );
}
export default User;
