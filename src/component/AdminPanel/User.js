function User({ id, name, favorite }) {
  const onSubmit = () => {
    favorite(id);
    console.log({ id });
  };
  return (
    <tbody className="alert-warning border border-warning">
      <tr className="border border-warning">
        <th className="border border-warning">{id}</th>
        <td className="border border-warning">{name}</td>
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
