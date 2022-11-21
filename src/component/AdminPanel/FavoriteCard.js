function FavoriteCard({ id, name }) {
  return (
    <div className="col">
      <div
        class="card border-warning mb-3"
        style={{ width: "10rem", height: "10rem" }}
      >
        <div class="card-body text-warning">
          <h5 class="card-title">{id}</h5>
          <p class="card-text">{name}</p>
        </div>
      </div>
    </div>
  );
}
export default FavoriteCard;
