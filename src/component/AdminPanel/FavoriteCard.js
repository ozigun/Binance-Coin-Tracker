function FavoriteCard({ id, name, surname, username, email, address, birth }) {
  return (
    <tbody className="alert-warning border border-warning">
      <tr className="border border-warning">
        <th className="border border-warning">{id}</th>
        <td className="border border-warning">{name}</td>
        <td className="border border-warning">Favori</td>
      </tr>
    </tbody>
  );
}
export default FavoriteCard;
