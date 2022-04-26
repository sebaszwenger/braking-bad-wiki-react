import "./Card.css";

const Card = ({ character }) => {
  const { name, nickname, status, occupation, img } = character;

  return (
    <div className="card my-3">
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <span
          className={`btn btn-sm float-end ${
            status.toLowerCase().includes("Alive")
              ? "btn-success"
              : "btn-danger"
          }`}
        >
          {status}
        </span>

        <h5 className="card-title">{name}</h5>
        <p className="card-text">{nickname}</p>

        <div className="row text-left">
          <p className="text-muted">Occupation</p>
          <hr />
          {occupation.map((item, index) => {
            return <strong key={index}>&bull; {item} </strong>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
